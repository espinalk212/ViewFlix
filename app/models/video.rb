class Video < ApplicationRecord
  validates :title, :description, :genre, :rating, presence: true



  has_one_attached :video
  has_one_attached :poster

end