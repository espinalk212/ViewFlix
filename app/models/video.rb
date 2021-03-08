class Video < ApplicationRecord
  validates :title, :description, presence: true, uniqueness: true
  validates :genre, :rating, presence: true


  has_one_attached :video
  has_one_attached :poster

end