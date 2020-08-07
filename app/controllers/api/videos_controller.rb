class Api::VideosController < ApplicationController
  def index
    if params[:query]
      title = Video.where('title ILIKE ?', "%#{params[:query]}%")
      genre = Video.where('genre ILIKE ?', "%#{params[:query]}%")
      @videos = (title + genre).uniq
    else
      @videos = Video.all
    end
    render :index
  end


  def show
    @video = Video.find(params[:id])
    render :show
  end

  private 
  def video_params 
    params.require(:video).permit(:id, :title, :description, :genre, :rating, :videoUrl, :posterUrl)
  end
end
