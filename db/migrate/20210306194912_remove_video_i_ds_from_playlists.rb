class RemoveVideoIDsFromPlaylists < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :video_id, :integer
  end
end
