json.extract! @video, :id, :title, :description, :genre, :rating
json.videoUrl url_for(@video.video)
json.posterUrl url_for(@video.poster)


