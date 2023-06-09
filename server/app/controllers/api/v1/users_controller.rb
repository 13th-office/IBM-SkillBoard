class Api::V1::UsersController < ApplicationController
  include Authentication
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  # In this function we'll get all the information related to this user, employee, team, manager and hopefully certificates
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(email: params[:email], employee_id: params[:employee_id])
    @employee = Employee.find(params[:employee_id])
    if @employee.present?
      if @user.save
        render json: @user, status: :created, location: api_v1_user_url(@user)
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: "Cannot be nill, create Employee for this user", status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:user).permit(:email, :employee_id)
    end
end
