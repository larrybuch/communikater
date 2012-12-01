class HomeController < ApplicationController

  before_filter :allow_cross_origin_access
  protect_from_forgery :except => :text
  protect_from_forgery :except => :email
  protect_from_forgery :except => :twitter

  def twitter
    Twitter.configure do |config|
      config.consumer_key = TWEET_CS_KEY
      config.consumer_secret = TWEET_CS_SEC
      config.oauth_token = TWEET_OA_TOK
      config.oauth_token_secret = TWEET_OA_SEC
    end

    tweet = params[:msg]
    Twitter.update(tweet)
  end

  def text
    from_phone = "+19177463330"
    to_phone = params[:to]
    txt = params[:msg]

    @client = Twilio::REST::Client.new(TW_SID, TW_TOK)
    @msg = @client.account.sms.messages.create({:from => from_phone, :to => to_phone, :body => txt})
    @account = @client.account

    @success = "Success!"

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @success }
    end
  end

  def email

    @to = params[:to]
    @msg = params[:msg]

    Communikatr.email(@to, @msg).deliver
  end

  private
    def allow_cross_origin_access
      response.headers['Access-Control-Allow-Origin'] = '*'
      response.headers['Access-Control-Allow-Origin'] = 'POST, GET, OPTIONS'
    end
end