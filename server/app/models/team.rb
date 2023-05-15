class Team
  include Mongoid::Document
  include Mongoid::Timestamps
  #we'll let the team possess the predetermined id value of mongo
  field :name, type: String

  has_many :employee_teams
  has_many :manager_teams

  def info
    {
      id: self._id.to_s,
      name: self.name,
    }
  end


  def managers
    manager_teams.map { |manager_team| manager_team.manager.info }
  end

  def employees
    employee_teams.map { |employee_team| employee_team.employee.info }
  end
end
