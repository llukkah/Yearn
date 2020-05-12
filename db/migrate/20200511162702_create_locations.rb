class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :country
      t.string :photo
      t.text :lodgingDetails
      t.text :activityDetails
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
