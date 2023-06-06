class Api::V1::ManagerTeamsController < ApplicationController
  include Authentication
  before_action :set_manager_team, only: %i[ show update destroy ]

  # GET /manager_teams
  def index
    @manager_teams = ManagerTeam.all

    render json: @manager_teams
  end

  # GET /manager_teams/1
  def show
    render json: @manager_team
  end

  # POST /manager_teams
  def create
    @manager_team = ManagerTeam.new(manager_team_params)

    if @manager_team.save
      render json: @manager_team, status: :created, location: api_v1_manager_team_url(@manager_team)
    else
      render json: @manager_team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /manager_teams/1
  def update
    if @manager_team.update(manager_team_params)
      render json: @manager_team
    else
      render json: @manager_team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /manager_teams/1
  def destroy
    @manager_team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manager_team
      @manager_team = ManagerTeam.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def manager_team_params
      params.permit(:employee_id, :team_id)
    end
end
