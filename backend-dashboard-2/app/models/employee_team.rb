class EmployeeTeam
  include Mongoid::Document
  include Mongoid::Timestamps

  field :employee_id, type: String
  field :team_id, type: String

  belongs_to :team
  belongs_to :employee, class_name: 'Employee', foreign_key: 'employee_id'
end
