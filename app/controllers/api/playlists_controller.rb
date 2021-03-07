class Api::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)
  end

  def update

  end

  def destroy

  end


  private

  def playlist_params
    params.require(:playlist).permit(:videos, :user_id, :order)
  end



end
