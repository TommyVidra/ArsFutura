class HomeController < ApplicationController
  def home
    puts "Ovo je test"
  end

  def new
    guid = SecureRandom.uuid
    puts guid
    return guid
  end

  def test
    @message = "Tomislav je Kralj programiranja"
  end
end
