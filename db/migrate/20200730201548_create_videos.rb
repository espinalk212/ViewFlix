class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :genre, null: false
      t.string :string, null: false
      t.integer :rating, null: false
      t.timestamps
    end
      add_index :videos, :id
      add_index :videos, :genre
      add_index :videos, :rating
  end
end
