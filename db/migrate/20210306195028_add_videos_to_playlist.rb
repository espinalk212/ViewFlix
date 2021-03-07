class AddVideosToPlaylist < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :videos, :integer, array: true, default: []
  end
end
