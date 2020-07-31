@videos.each do |video|
  json.extract! video, :id, :title, :description, :genre, :rating
end
