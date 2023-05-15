class Api::V1::EmployeeTeamsController < ApplicationController
  include Authentication
  before_action :set_employee_team, only: %i[ show update destroy ]

  # GET /employee_teams
  def index
    @employee_teams = EmployeeTeam.all

    render json: @employee_teams
  end

  # GET /employee_teams/1
  def show
    render json: @employee_team
  end

  # POST /employee_teams
  def create
    @employee_team = EmployeeTeam.new(employee_team_params)

    if @employee_team.save
      render json: @employee_team, status: :created, location: api_v1_employee_team_url(@employee_team)
    else
      render json: @employee_team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /employee_teams/1
  def update
    if @employee_team.update(employee_team_params)
      render json: @employee_team
    else
      render json: @employee_team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /employee_teams/1
  def destroy
    @employee_team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee_team
      @employee_team = EmployeeTeam.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_team_params
      params.permit(:employee_id, :team_id)
    end
end
