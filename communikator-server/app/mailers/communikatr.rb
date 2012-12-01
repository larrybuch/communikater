class Communikatr < ActionMailer::Base
  default from: "larrybuch@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.communikatr.email.subject
  #
  def email(to, msg)
    @msg = msg
    @to = to
    mail to: to
  end
end
