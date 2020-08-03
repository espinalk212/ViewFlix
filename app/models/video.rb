class Video < ApplicationRecord
  validates :title, :description, :genre, :rating, presence: true

  # has_many: playlists
  # has_many: users through: playlists

  has_one_attached :video
  # has_one_attached :poster
end