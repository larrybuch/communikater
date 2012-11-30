class MessagesController < ApplicationController
  def index
  end
  def create
    @method = params[:method]

  end
end