class Employee
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id, type: String, default: ->{BSON::ObjectId.new.to_s} #this is the normal employee id.
  field :name, type: String
  field :last_name, type: String
  field :email, type: String
  field :role, type: String

  #store_in collection "employees"
  #field :_id, as: :employee_id, type: String, default: ->{BSON::ObjectId.new.to_s}

end
