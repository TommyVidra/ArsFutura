class ListsController < ApplicationController

  def index
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(post_params)
    @list.guid = @list.id

    if @list.save
      redirect_to @list
    else
      render 'new'
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy

    redirect_to lists_path
  end
  def show
    @list = List.find(params[:id])
  end

  private
  def post_params
    params.require(:list).permit( :name)
  end

end