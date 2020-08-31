class Video < ApplicationRecord
  validates :title, :description, :genre, :rating, presence: true

  has_many :playlists
  has_many :users, through: :playlists

  has_one_attached :video
  has_one_attached :poster

  # def self.find_by_title(query) 
  #   @connection = ActiveRecord::Base.connection
  #   results = @connection.exec_query("SELECT * FROM videos WHERE title ILIKE #{query}")
  # end

  # def self.find_by_genre(query)
  #   @connection = ActiveRecord::Base.connection
  #   results = @connection.exec_query("SELECT * FROM videos WHERE genre ILIKE #{query}")
  # end

end