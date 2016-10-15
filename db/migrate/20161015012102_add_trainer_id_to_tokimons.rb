class AddTrainerIdToTokimons < ActiveRecord::Migration
  def change
    add_column :tokimons, :trainer_id, :integer
  end
end
