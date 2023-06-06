require "test_helper"

class CertificateEmployeesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @certificate_employee = certificate_employees(:one)
  end

  test "should get index" do
    get certificate_employees_url, as: :json
    assert_response :success
  end

  test "should create certificate_employee" do
    assert_difference("CertificateEmployee.count") do
      post certificate_employees_url, params: { certificate_employee: { certificate_id: @certificate_employee.certificate_id, employee_id: @certificate_employee.employee_id } }, as: :json
    end

    assert_response :created
  end

  test "should show certificate_employee" do
    get certificate_employee_url(@certificate_employee), as: :json
    assert_response :success
  end

  test "should update certificate_employee" do
    patch certificate_employee_url(@certificate_employee), params: { certificate_employee: { certificate_id: @certificate_employee.certificate_id, employee_id: @certificate_employee.employee_id } }, as: :json
    assert_response :success
  end

  test "should destroy certificate_employee" do
    assert_difference("CertificateEmployee.count", -1) do
      delete certificate_employee_url(@certificate_employee), as: :json
    end

    assert_response :no_content
  end
end
