require "test_helper"

class ManagerTeamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manager_team = manager_teams(:one)
  end

  test "should get index" do
    get manager_teams_url, as: :json
    assert_response :success
  end

  test "should create manager_team" do
    assert_difference("ManagerTeam.count") do
      post manager_teams_url, params: { manager_team: { employee_id: @manager_team.employee_id, team_id: @manager_team.team_id } }, as: :json
    end

    assert_response :created
  end

  test "should show manager_team" do
    get manager_team_url(@manager_team), as: :json
    assert_response :success
  end

  test "should update manager_team" do
    patch manager_team_url(@manager_team), params: { manager_team: { employee_id: @manager_team.employee_id, team_id: @manager_team.team_id } }, as: :json
    assert_response :success
  end

  test "should destroy manager_team" do
    assert_difference("ManagerTeam.count", -1) do
      delete manager_team_url(@manager_team), as: :json
    end

    assert_response :no_content
  end
end
