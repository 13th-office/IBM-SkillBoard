class Api::V1::CertificatesController < ApplicationController
    include Authentication
    before_action :set_certificate, only: %i[ update destroy ]

    # GET /certificates
    def index
      @certificates = Certificate.all

      render json: @certificates.map { |certificate| certificate.all_info }
    end
  
    # GET /certificates/:type
    def show
      type = params[:id]

      if type == "all"
        @certificates = Certificate.all
      elsif type == "ibm" || type == "industry"
        @certificates = Certificate.where(type: type)
      elsif type == "my_teams"
        user = User.find_by(id: session[:user_id])
        employee = user.employee
        employee_id = employee.employee_id
        teams = Team.where(:id.in =>(
          EmployeeTeam.where(employee_id: employee_id).pluck(:team_id) +
          ManagerTeam.where(employee_id: employee_id).pluck(:team_id)
        ))
        team_ids = teams.map { |team| team[:id] }
        employees = Employee.where(:id.in => (
          EmployeeTeam.where(:team_id.in => team_ids).pluck(:employee_id) +
          ManagerTeam.where(:team_id.in => team_ids).pluck(:employee_id)
        ))
        employee_ids = employees.map{|employee| employee[:id]}
        @certificates = Certificate.where(:id.in => (
          CertificateEmployee.where(:employee_id.in => employee_ids).pluck(:certificate_id)
        ))
      else
        render json: { error: "type must be all, ibm, industry, or my_teams" }, status: :bad_request
        return
      end

      render json: @certificates.map { |certificate| certificate.all_info }
    end
  
    # POST /certificates
    def create
      @certificate = Certificate.new(name: params[:name], expiration_date: params[:expiration_date], type: params[:type])
  
      if @certificate.save
        render json: @certificate, status: :created, location: api_v1_certificate_url(@certificate)
      else
        render json: @certificate.errors, status: :unprocessable_entity
      end
      
    end
  
    # PATCH/PUT /certificates/1
    def update
      if @certificate.update(certificate_params)
        render json: @certificate
      else
        render json: @certificate.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /certificates/1
    def destroy
      @certificate.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_certificate
        @certificate = Certificate.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def certificate_params
        params.fetch(:certificate).permit(:name, :expiration_date, :type)
      end
end
