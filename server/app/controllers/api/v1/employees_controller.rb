class Api::V1::EmployeesController < ApplicationController
  include Authentication
  before_action :set_employee, only: %i[ update destroy ]

  # GET /employees
  def index
    @employees = Employee.all
    render json: @employees
  end

  # GET /employees/1
  def show
    @employee = Employee.find_by(email: params[:id]+"@ibm.com")
    render json: { employee: @employee.info, teams: @employee.teamsWithManager, certificates: @employee.certificates }
  end

  # POST /employees
  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      render json: @employee, status: :created, location: api_v1_employee_url(@employee)
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /employees/1
  def update
    if @employee.update(employee_params)
      render json: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /employees/1
  def destroy
    @employee.destroy
  end

  # GET /viewer
  def viewer
    @user = User.find_by(id: session[:user_id])
    @employee = Employee.find_by(email: @user.email)
    render json: { employee: @employee.info }
  end

  def myteamviewer
    @user = User.find_by(id: session[:user_id])
    @employee = Employee.find_by(email: @user.email)
    render json: { teams: @employee.teams}
  end

  # GET /search/employees(/:search_term)
  def search
    if params.has_key?(:search_term)
      @employees = Employee.where(name: /.*#{params[:search_term]}.*/i).or(Employee.where(last_name: /.*#{params[:search_term]}.*/i))
    else
      @employees = Employee.all
    end
    render json: @employees

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_params
      params.permit(:id, :name, :last_name, :email, :role)
    end
end
