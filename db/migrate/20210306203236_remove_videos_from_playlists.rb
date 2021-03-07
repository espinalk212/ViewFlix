class RemoveVideosFromPlaylists < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :videos, :integer
  end
  add_column :playlists, :video_id, :integer
end
