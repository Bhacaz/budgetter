class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.float :amount
      t.date :date
      t.string :description

      t.timestamps
    end
  end
end
