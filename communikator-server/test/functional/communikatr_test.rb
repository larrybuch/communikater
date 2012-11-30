require 'test_helper'

class CommunikatrTest < ActionMailer::TestCase
  test "email" do
    mail = Communikatr.email
    assert_equal "Email", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
