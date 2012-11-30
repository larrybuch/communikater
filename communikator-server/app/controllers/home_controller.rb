class HomeController < ApplicationController

  before_filter :allow_cross_origin_access

  def twitter
  end

  def text
    from_phone = "+19177463330"
    to_phone = params[:to]
    txt = params[:msg]

    @client = Twilio::REST::Client.new(TW_SID, TW_TOK)
    @msg = @client.account.sms.messages.create({:from => from_phone, :to => to_phone, :body => txt})
    @account = @client.account

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @msg }
    end
  end

  def email
  end

  private
    def allow_cross_origin_access
      response.headers['Access-Control-Allow-Origin'] = '*'
      response.headers['Access-Control-Allow-Origin'] = 'POST, GET, OPTIONS'
    end
end