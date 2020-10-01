class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :guid
      t.string :description
      t.boolean :done

      t.timestamps
    end
  end
end
