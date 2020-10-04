class CreateLists < ActiveRecord::Migration[6.0]
  def down
    drop_table :lists
  end
end
