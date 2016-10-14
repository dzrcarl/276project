class CreatePerson < ActiveRecord::Migration
  def change
    create_table :person do |t|
      t.string :pname
      t.integer :age

      t.timestamps null: false
    end
  end
end
