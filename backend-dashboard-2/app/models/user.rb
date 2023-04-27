class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  identity :type => String, :default => ->{ BSON::ObjectId.new.to_s }
  field :email, type: String
  belongs_to :employees, class_name: "Employee", foreign_key: "employee_id"
end
