class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id
  field :email, type: String
  has_one :employee, class_name: "Employee", foreign_key: "employee_id"
end
