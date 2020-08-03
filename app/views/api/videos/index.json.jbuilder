@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :description, :genre, :rating
    json.videoUrl url_for(video.video)
  end 
end
