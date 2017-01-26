class AddHipchatMentionNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :hipchat_mention_name, :string
  end
end
