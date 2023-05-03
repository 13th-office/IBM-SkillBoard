class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id
  field :employee_id
  field :email, type: String
  belongs_to :employee, class_name: "Employee"
end
