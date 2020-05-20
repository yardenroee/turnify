class CreateTests < ActiveRecord::Migration[5.2]
  def change
    create_table :tests do |t|
      t.integer :string_id, null:false
      t.text :string_text

      t.timestamps
    end
    add_index :tests, :string_id
  end
end
