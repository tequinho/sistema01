class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :name
      t.string :document
      t.string :email
      t.string :phone
      t.references :pg, foreign_key: true
      t.text :notes
      t.integer :status

      t.timestamps
    end
  end
end
