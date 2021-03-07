class AddVideosArrayToPlaylist < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :videos, :integer, array: true, default: []
  end
  remove_column :playlists, :video_id, :integer
end
