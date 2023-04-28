class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id
  field :employee_id
  field :email, type: String
  has_one :employee, class_name: "Employee", foreign_key: 'user_id', inverse_of: :user
end
