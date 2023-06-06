class ManagerTeam
  include Mongoid::Document
  include Mongoid::Timestamps
  #Is basically the same as EmployeeTeam, but managers will be registered into
  #this collection
  field :employee_id, type: String
  field :team_id, type: String

  belongs_to :team
  belongs_to :manager, class_name: 'Employee', foreign_key: 'employee_id'
end
