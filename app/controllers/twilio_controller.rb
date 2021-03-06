
##### Twilio APIの操作及びチャットツールへの通知を行うコントローラー #####
# 動作の流れ
# (1)indexのフォームから電話番号をajaxで取得
# (2)callアクション呼び出し
# (3)チャットツールへ1回目の通知
# (4)Twilio API呼び出し.(タイムアウトを10秒に設定)
# (5)通話開始から20秒後に通話ステータスを確認
# (6)チャットツールへ2回目の通知,ajaxでのステータス引き渡し.(ステータスによって文言を変更)
##### Twilio APIの操作及びチャットツールへの通知を行うコントローラー #####

require 'twilio-ruby'

class TwilioController < ApplicationController
  # Before we allow the incoming request to connect, verify
  # that it is a Twilio request
  before_filter :authenticate_twilio_request, :only => [
    :connect
  ]


  # ----------API Tokenの設定----------
  # Define our Twilio credentials as instance variables for later use
  @@twilio_sid = ENV['TWILIO_SID']
  @@twilio_token = ENV['TWILIO_TOKEN']
  @@twilio_number = ENV['TWILIO_NUMBER']
  @@slack_token = ENV['SLACK_TOKEN']
  @@hipchat_token = ENV['HIPCHAT_TOKEN']
  # ----------API Tokenの設定----------

  # Render home page
  def index
    @users = User.order("updated_at ASC") # DBからユーザー全員分取得。更新日時で並び替え。
    @app_condition = AppCondition.last.status
  	#render 'index'
    render :layout => false # レイアウトを使わない設定に
  end

  # Hande a POST from our web form and connect a call via REST API
  def call
    contact = Contact.new
    contact.phone = params[:phone]
    @contact_to = User.find_by(phonenumber: contact.phone).username # 呼び出された人の名前(Slack用)
    @contact_to_url = URI.escape(@contact_to) # 呼び出された人の名前(Twilio用, URLにエンコード)
    @contact_to_slack_id = User.find_by(phonenumber: contact.phone).slack_id # 呼び出された人のSlackID
    @contact_to_hipchat = User.find_by(phonenumber: contact.phone).hipchat_mention_name # 呼び出された人のHipchat Mention Name

    # ----------Heroku用環境変数にてAPI Tokenセット----------
    # HIPCHAT
    hipchat_client = HipChat::Client.new(@@hipchat_token, :api_version => 'v2')

    # ----------チャットツールへ1回目の通知, 呼び出された旨をメンション付きで通知----------
    # HIPCHAT
    hipchat_client['Visitor'].send('UketsukeApp', "@#{@contact_to_hipchat} 受付Webアプリからの送信です。#{@contact_to}さんが呼び出されました。ステータス：呼び出し中。20秒後に通話ステータスを再確認します。", :message_format => 'text', :notify => true)

    # ----------Twilio API呼び出し.(タイムアウトを10秒に設定)----------
    # Validate contact
    if contact.valid?
      @client = Twilio::REST::Client.new @@twilio_sid, @@twilio_token
      # Connect an outbound call to the number submitted
      @call = @client.account.calls.create(
        :from => @@twilio_number,
        :to => contact.phone,
        # twimletsのecho機能で電話メッセージを生成.呼び出された人の名前を途中に埋め込み.
        # <Response><Say voice="alice" language="ja-JP">こちらは,受付アプリです.#{@contact_to}さんが呼び出されました.</Say></Response>
        :url => "http://twimlets.com/echo?Twiml=%3CResponse%3E%0A%3CSay%20voice%3D%22alice%22%20language%3D%22ja-JP%22%3E%E3%81%93%E3%81%A1%E3%82%89%E3%81%AF%2C%E5%8F%97%E4%BB%98%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A7%E3%81%99.#{@contact_to_url}%E3%81%95%E3%82%93%E3%81%8C%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F.%3C%2FSay%3E%0A%3C%2FResponse%3E&",
        # このcontrollerのconnectアクションで電話メッセージを生成.
        # :url => "#{root_url}connect", # Fetch instructions from this URL when the call connects
        :timeout => 10 # 呼び出しタイムアウトを10秒に設定. => 20秒後に通話ステータスを確認後viewに@msgで通話状態を
      )

      # ----------通話開始から20秒後に通話ステータスを確認----------
      sleep(20)

      # ----------チャットツールへ2回目の通知----------
      @calling = @client.account.calls.get(@call.sid) # 通話ステータス問い合わせ
      if @calling.status == 'in-progress' || @calling.status == 'completed' # 電話に出ている(='in-progress')か、通話が完了している(='completed')場合
        # HIPCHAT
        hipchat_client['Visitor'].send('UketsukeApp', "#{@contact_to}さんが呼び出されました。ステータス：電話を取りました。", :message_format => 'text', :notify => true)
        # Ajax
        @msg = { :message => "yes", :status => 'ok' } # data.messageに"yes"を追加.その後jsで分岐処理.
      else # 電話に出れなかった場合
        # HIPCHAT
        hipchat_client['Visitor'].send('UketsukeApp', "#{@contact_to}さんが呼び出されました。ステータス：電話を取ることができませんでした。", :message_format => 'text', :notify => true)
        # Ajax
        @msg = { :message => "no", :status => 'ok' } # data.messageに"no"を追加.その後jsで分岐処理.
      end

      ##### Twilioのstatusメモ #####
      # when 'no-answer', 'completed'
      # when 'failed','canceled'
      # when 'queued','ringing','in-progress','busy'

      ##### チュートリアルデフォルト部分をコメントアウト #####
      # Lets respond to the ajax call with some positive reinforcement
      # @msg = { :message => 'Phone call incoming!', :status => 'ok' }
    else
      ##### チュートリアルデフォルト部分をコメントアウト #####
      # Oops there was an error, lets return the validation errors
      # @msg = { :message => contact.errors.full_messages, :status => 'ok' }
    end
    respond_to do |format|
      format.json { render :json => @msg }
    end
  end

  # This URL contains instructions for the call that is connected with a lead
  # that is using the web form.  These instructions are used either for a
  # direct call to our Twilio number (the mobile use case) or
  def connect
    # Our response to this request will be an XML document in the "TwiML"
    # format. Our Ruby library provides a helper for generating one
    # of these documents
    response = Twilio::TwiML::Response.new do |r|
      # r.Say "こちらは,受付アプリです.#{@contact_to}さんが呼び出されました.", :voice => 'alice', :language => 'ja-jp'
      # r.Say 'If this were a real click to call implementation, you would be connected to an agent at this point.', :voice => 'alice'
    end
    render text: response.text
  end


  # Authenticate that all requests to our public-facing TwiML pages are
  # coming from Twilio. Adapted from the example at
  # http://twilio-ruby.readthedocs.org/en/latest/usage/validation.html
  # Read more on Twilio Security at https://www.twilio.com/docs/security
  private
  def authenticate_twilio_request
    twilio_signature = request.headers['HTTP_X_TWILIO_SIGNATURE']

    # Helper from twilio-ruby to validate requests.
    @validator = Twilio::Util::RequestValidator.new(@@twilio_token)

    # the POST variables attached to the request (eg "From", "To")
    # Twilio requests only accept lowercase letters. So scrub here:
    post_vars = params.reject {|k, v| k.downcase == k}

    is_twilio_req = @validator.validate(request.url, post_vars, twilio_signature)

    unless is_twilio_req
      render :xml => (Twilio::TwiML::Response.new {|r| r.Hangup}).text, :status => :unauthorized
      false
    end
  end

end
