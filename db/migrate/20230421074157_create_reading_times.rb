class CreateReadingTimes < ActiveRecord::Migration[7.0]
  def change
    create_table :reading_times do |t|

      t.timestamps
    end
  end
end
