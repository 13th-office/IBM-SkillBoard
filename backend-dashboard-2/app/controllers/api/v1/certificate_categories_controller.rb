class Api::V1::CertificateCategoriesController < ApplicationController
  before_action :set_certificate_category, only: %i[ show update destroy ]

  # GET /certificate_categories
  def index
    @certificate_categories = CertificateCategory.all

    render json: @certificate_categories
  end

  # GET /certificate_categories/1
  def show
    render json: @certificate_category
  end

  # POST /certificate_categories
  def create
    @certificate_category = CertificateCategory.new(certificate_category_params)

    if @certificate_category.save
      render json: @certificate_category, status: :created, location: @certificate_category
    else
      render json: @certificate_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /certificate_categories/1
  def update
    if @certificate_category.update(certificate_category_params)
      render json: @certificate_category
    else
      render json: @certificate_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /certificate_categories/1
  def destroy
    @certificate_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_certificate_category
      @certificate_category = CertificateCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def certificate_category_params
      params.require(:certificate_category).permit(:certificate_id, :category_id)
    end
end
