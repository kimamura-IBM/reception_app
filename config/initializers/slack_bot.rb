SlackBot.setup do |config|
      #config.token = 'xoxp-6835797559-6978297459-6980388391-8ce83e' #n2p
      config.token = 'xoxp-6978191347-6977886208-6978512406-850017' #Herrokkin
      #config.channel = '#read_only' #n2p
      config.channel = '#general' #Herrokkin
      config.bot_name = 'SlackBot'
      config.body = '受付Webアプリのテスト送信です。 https://damp-reaches-2263.herokuapp.com/ https://github.com/Herrokkin/twilio-tutorial-clicktocall-rails/'
end