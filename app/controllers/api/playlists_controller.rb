class Api::PlaylistsController < ApplicationController

  def create
    @playlist = Playlist.new(playlist_params)
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def destroy 
  end

  private
  
  def playlist_params
    params.require(:playlist).permit(:video_id, :user_id, :order)
  end


  
end
