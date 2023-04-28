class Employee
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :id, type: String, default: ->{BSON::ObjectId.new.to_s} #this is the normal employee id.
  field :id, type: String
  field :name, type: String
  field :last_name, type: String
  field :email, type: String
  field :role, type: String

  #store_in collection "employees"
  #field :_id, as: :employee_id, type: String, default: ->{BSON::ObjectId.new.to_s}


  has_many :employee_teams
  has_many :manager_teams, class_name: 'ManagerTeam', foreign_key: 'employee_id'

  def teams #Finds the temas in where the employee is associated to, being he/she a manager or not.
    Team.where(:id.in =>(employee_teams.pluck(:team_id)+manager_teams.pluck(:team_id)))
  end

end
