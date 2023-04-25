class User
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id, type: String
  field :email, type: String
  field :employee_id, type: String
end
