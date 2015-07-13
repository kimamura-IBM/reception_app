require 'twilio-ruby'

class TwilioController < ApplicationController
  # Before we allow the incoming request to connect, verify
  # that it is a Twilio request
  before_filter :authenticate_twilio_request, :only => [
    :connect
  ]

  # Define our Twilio credentials as instance variables for later use
  ###### Herrokkin #####
  @@twilio_sid = 'AC2791363715b8f1abc21fc62cd21bc279'
  @@twilio_token = '100b1d7a8374e3286b944ae391d278fc'
  @@twilio_number = '+81345895605'

  ###### n2p #####
  # @@twilio_sid = 'AC2be2f6548663497c67056293e1cf885a'
  # @@twilio_token = 'b2e54961e22bc77ab25c3f555dd3d054'
  # @@twilio_number = '+815031353908'

  # Render home page
  def index
    @users = User.all.reverse_order
  	render 'index'
  end

  # Hande a POST from our web form and connect a call via REST API
  def call
    contact = Contact.new
    contact.phone = params[:phone]
    # @@namae = params[:namae]
    # @@issue = params[:issue]
    @@contact_to = User.find_by(phonenumber: contact.phone).username
   
    # Validate contact
    if contact.valid?
      @client = Twilio::REST::Client.new @@twilio_sid, @@twilio_token
      # Connect an outbound call to the number submitted
      @call = @client.account.calls.create(
        :from => @@twilio_number,
        :to => contact.phone,
        #:url => "http://twimlets.com/echo?Twiml=%3CResponse%3E%0A%20%20%3CPause%20length%3D%222%22%2F%3E%0A%20%20%3CSay%20voice%3D%22woman%22%20language%3D%22ja-jp%22%3E%E3%81%93%E3%81%A1%E3%82%89%E3%81%AF%E3%80%81%E3%82%A6%E3%82%A7%E3%83%96%E3%83%AA%E3%82%AA%E3%81%8B%E3%82%89%E7%99%BA%E4%BF%A1%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E5%8F%97%E4%BB%98%E3%81%8B%E3%82%89%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AB%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%97%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%3C%2FSay%3E%0A%3C%2FResponse%3E&" # Fetch instructions from this URL when the call connects
        :url => "#{root_url}connect" # Fetch instructions from this URL when the call connects
      )

      @call_status = @client.account.calls.get(@call.sid)
      while @call_status == "completed" do
        @@call_status_for_view = "呼び出し中"
        @call_status = @client.account.calls.get(@call.sid)
      end
      @@call_status_for_view = "完了"

      # loop do
      #   case @call.status
      #     when 'no-answer', 'completed'
      #       SlackBot.notify(
      #           body: "受付Webアプリからの送信です。ステータス:#{@call.status}。#{@@contact_to}さんが呼び出されました。 https://github.com/Herrokkin/twilio-tutorial-clicktocall-rails/"
      #       ) #SlackBotからメッセージ送信
      #       break
      #     when 'failed','canceled'
      #       SlackBot.notify(
      #           body: "受付Webアプリからの送信です。ステータス:#{@call.status}。#{@@contact_to}さんが呼び出されました。 https://github.com/Herrokkin/twilio-tutorial-clicktocall-rails/"
      #       ) #SlackBotからメッセージ送信
      #       break
      #     when 'queued','ringing','in-progress','busy'
      #       SlackBot.notify(
      #           body: "受付Webアプリからの送信です。ステータス:#{@call.status}。#{@@contact_to}さんが呼び出されました。 https://github.com/Herrokkin/twilio-tutorial-clicktocall-rails/"
      #       ) #SlackBotからメッセージ送信
      #       sleep(3)
      #       break
      #   end
      # end

      SlackBot.notify(
          # body: "受付Webアプリからの送信です。#{@@namae}さんから送信 - ご用件：#{@@issue} https://github.com/Herrokkin/twilio-tutorial-clicktocall-rails/ https://damp-reaches-2263.herokuapp.com/"
          body: "受付Webアプリからの送信です。ステータス:#{@call.status}。#{@@contact_to}さんが呼び出されました。 https://github.com/Herrokkin/twilio-tutorial-clicktocall-rails/"
      ) #SlackBotからメッセージ送信

      # Lets respond to the ajax call with some positive reinforcement
      @msg = { :message => 'Phone call incoming!', :status => 'ok' }

    else

      # Oops there was an error, lets return the validation errors
      @msg = { :message => contact.errors.full_messages, :status => 'ok' }
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
      # r.Say "こちらは,受付アプリです.#{@@namae}さんから,#{@@issue}の件で呼び出しがありました.", :voice => 'alice', :language => 'ja-jp'
      r.Say "こちらは,受付アプリです.#{@@contact_to}さんが呼び出されました.", :voice => 'alice', :language => 'ja-jp'
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
