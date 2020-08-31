class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.integer :order, null: false
      t.timestamps
    end
  end
end
