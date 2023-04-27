class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id
  field :employee_id
  field :email, type: String
  belongs_to :employees, class_name: "Employee", foreign_key: "employee_id"
end
