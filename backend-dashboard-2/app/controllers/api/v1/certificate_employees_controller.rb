class Api::V1::CertificateEmployeesController < ApplicationController
  before_action :set_certificate_employee, only: %i[ show update destroy ]

  # GET /certificate_employees
  def index
    @certificate_employees = CertificateEmployee.all

    render json: @certificate_employees
  end

  # GET /certificate_employees/1
  def show
    render json: @certificate_employee
  end

  # POST /certificate_employees
  def create
    @certificate_employee = CertificateEmployee.new(certificate_employee_params)

    if @certificate_employee.save
      render json: @certificate_employee, status: :created, location: api_v1_certificate_employee_url(@certificate_employee)
    else
      render json: @certificate_employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /certificate_employees/1
  def update
    if @certificate_employee.update(certificate_employee_params)
      render json: @certificate_employee
    else
      render json: @certificate_employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /certificate_employees/1
  def destroy
    @certificate_employee.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_certificate_employee
      @certificate_employee = CertificateEmployee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def certificate_employee_params
      params.require(:certificate_employee).permit(:employee_id, :certificate_id)
    end
end
