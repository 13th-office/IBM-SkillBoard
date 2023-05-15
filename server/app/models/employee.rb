class Employee
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :name, type: String
  field :last_name, type: String
  field :email, type: String
  field :role, type: String

  #store_in collection "employees"
  #field :_id, as: :employee_id, type: String, default: ->{BSON::ObjectId.new.to_s}

  has_one :user
  has_many :employee_teams, class_name: 'EmployeeTeam', foreign_key: 'employee_id'
  has_many :manager_teams, class_name: 'ManagerTeam', foreign_key: 'employee_id'

  has_many :certificate_employees, class_name: 'CertificateEmployee', foreign_key: 'employee_id'

  def info
    {
      id: self.id,
      name: self.name,
      last_name: self.last_name,
      email: self.email,
      role: self.role
    }
  end
  
  def teams #Finds the teams in where the employee is associated to, being a manager or not.
    teams = Team.where(:id.in =>(employee_teams.pluck(:team_id)+manager_teams.pluck(:team_id)))
    teams.map { |team| { team: team.info, manager: team.managers[0] } }
  end

  def certificates
    certificates = Certificate.where(:_id.in => (certificate_employees.pluck(:certificate_id)))
    certificates.map { |certificate| certificate.all_info }
  end

  field :_id, type: String, default: ->{BSON::ObjectId.new.to_s}
  alias_attribute :employee_id, :id
  alias_method :to_param, :id

end
