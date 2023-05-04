class Api::V1::TeamsController < ApplicationController
  include Authentication
  before_action :set_team, only: %i[ show update destroy ]

  # GET /teams
    def index
      @teams = Team.all
      render json: {teams: @teams.map { |team| { team: team.info, employees: team.employees, managers: team.managers } }}

  end

  # GET /teams/1
  def show
    render json: { team: @team.info, employees: @team.employees, managers: @team.managers }
  end

  # POST /teams
  def create
    @team = Team.new(team_params)

    if @team.save
      render json: @team, status: :created, location: api_v1_team_url(@team)
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teams/1
  def update
    if @team.update(team_params)
      render json: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teams/1
  def destroy
    @team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def team_params
      params.permit(:id, :name)
    end
end
