class CreateAppConditions < ActiveRecord::Migration
  def change
    create_table :app_conditions do |t|
      t.integer :status
      t.string :user
      t.text :reason

      t.timestamps
    end
  end
end
