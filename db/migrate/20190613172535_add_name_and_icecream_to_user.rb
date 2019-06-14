class AddNameAndIcecreamToUser < ActiveRecord::Migration[5.2]
  def change
    #add_column :table_name, :new_column, :new_column_type
    add_column :users, :first_name, :string 
    add_column :users, :last_name, :string 
    add_column :users, :favorite_ice_cream, :string
  end
end
