class Playlist < ApplicationRecord

  belongs_to :user
  attr_writer :playlist

  def add_video(video_id)
    self.videos.push(video_id) if !self.videos.include?(video_id)
    self.videos
  end

  def remove_video(video_id)
    index = self.videos.index(video_id)
    self.videos.delete_at(index) if index
    self.videos
  end

end
