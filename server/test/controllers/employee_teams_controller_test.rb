require "test_helper"

class EmployeeTeamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @employee_team = employee_teams(:one)
  end

  test "should get index" do
    get employee_teams_url, as: :json
    assert_response :success
  end

  test "should create employee_team" do
    assert_difference("EmployeeTeam.count") do
      post employee_teams_url, params: { employee_team: { employee_id: @employee_team.employee_id, team_id: @employee_team.team_id } }, as: :json
    end

    assert_response :created
  end

  test "should show employee_team" do
    get employee_team_url(@employee_team), as: :json
    assert_response :success
  end

  test "should update employee_team" do
    patch employee_team_url(@employee_team), params: { employee_team: { employee_id: @employee_team.employee_id, team_id: @employee_team.team_id } }, as: :json
    assert_response :success
  end

  test "should destroy employee_team" do
    assert_difference("EmployeeTeam.count", -1) do
      delete employee_team_url(@employee_team), as: :json
    end

    assert_response :no_content
  end
end
