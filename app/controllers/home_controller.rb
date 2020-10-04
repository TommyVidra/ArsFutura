class HomeController < ApplicationController

  def home
    puts "Ovo je test"
  end

  def new
    guid = SecureRandom.uuid
    # puts guid
    page = Page.create!( guid: guid)

    if page
      puts guid
      puts "USPIO SI KRALJU"
    end
  end

  def delete(guid)
    guid = prams[:guid]
    puts guid
  end

  def test
    @message = "Tomislav je Kralj programiranja"
  end
end
