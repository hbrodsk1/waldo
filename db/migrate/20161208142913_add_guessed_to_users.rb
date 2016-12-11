class AddGuessedToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :guessed, :boolean, default: false
  end
end
