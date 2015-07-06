require 'rubygems' # not necessary with ruby 1.9 but included for completeness
require 'twilio-ruby'

# put your own credentials here - from twilio.com/user/account
account_sid = 'AC2be2f6548663497c67056293e1cf885a'
auth_token = 'b2e54961e22bc77ab25c3f555dd3d054'

# set up a client to talk to the Twilio REST API
@client = Twilio::REST::Client.new account_sid, auth_token

@call = @client.account.calls.create(
    :from => '+815031353908',   # From your Twilio number
    :to => '+819061137395',     # To any number
    # Fetch instructions from this URL when the call connects
    :url => 'http://twimlets.com/holdmusic?Bucket=com.twilio.music.ambient'
)