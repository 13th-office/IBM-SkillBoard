class Api::V1::CertificatesController < ApplicationController
    include Authentication
    before_action :set_certificate, only: %i[ update destroy ]

    # GET /certificates
    def index
      @certificates = Certificate.last(20)

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
      @certificate = Certificate.new(name: params[:name],issue_date: params[:issue_date], expiration_date: params[:expiration_date], type: params[:type])
  
      if @certificate.save
        render json: @certificate, status: :created, location: api_v1_certificate_url(@certificate)
      else
        render json: @certificate.errors, status: :unprocessable_entity
      end
      
    end

    def mass_create
      statuses = []
      params[:certificates].each do |certificate_params|
         @certificate = Certificate.new(name: certificate_params[:name], issue_date: certificate_params[:issue_date], expiration_date: certificate_params[:expiration_date], type: certificate_params[:type])
         statuses << ( @certificate.save ? "OK" : @certificate.errors )
    end if params[:certificates]
      render json: statuses
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
  
    # GET /certificates/dashboard_charts
    def dashboard_charts
      # Chart 1 work
      @top_categories = CertificateCategory.most_frequent_categories(8)
      @g1_labels = []
      @g1_dataset = []
      @g1_title = "Top categories"

      @top_categories.each_with_index do | category, i |
        @g1_labels[i] = Category.find(category['_id']).name
        @g1_dataset[i] = category['count']
      end

      # Chart 2 work
      @user = User.find_by(id: session[:user_id])
      @employee = Employee.find_by(email: @user.email)
      @teammates = @employee.teamMembers
      @certificates = CertificateEmployee.top_certificates_team(@teammates, 8)

      @g2_labels = []
      @g2_dataset = []
      @g2_title = "Top certificates in your teams"

      @certificates.each_with_index do | certificate, i |
        @g2_labels[i] = Certificate.find(certificate['_id']).name
        @g2_dataset[i] = certificate['count']
      end

      render json: { 
        left: { 
          title: @g1_title, 
          labels: @g1_labels, 
          dataset: @g1_dataset 
          },
        right: {
          title: @g2_title, 
          labels: @g2_labels, 
          dataset: @g2_dataset 
        }}


    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_certificate
        @certificate = Certificate.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def certificate_params
        params.fetch(:certificate).permit(:name, :issue_date, :expiration_date, :type)
      end
end
