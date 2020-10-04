class TestController < ApplicationController
  def create
    list = List.find_by(guid: prams["guid"])

    if list
      test[:guid] = list.guid
      render json: {
          status: :created,
          logged_in: true,
          list: list
      }
    else
      render json: { status: 401 }
    end
  end

  def test
    @message = "Tomislav je Kralj programiranja"
  end
end
