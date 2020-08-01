class FixVideoTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :string
  end
end
