class Api::V1::CertificatesController < ApplicationController
    include Authentication
    before_action :set_certificate, only: %i[ show update destroy ]

    # GET /certificates
    def index
      @certificates = Certificate.all
  
      render json: @certificates
    end
  
    # GET /certificates/1
    def show
      render json: @certificates
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
