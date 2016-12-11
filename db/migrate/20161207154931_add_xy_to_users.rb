class AddXyToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :x, :integer
    add_column :users, :y, :integer
  end
end
