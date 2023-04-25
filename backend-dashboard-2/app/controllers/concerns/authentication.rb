# Include module in every controller requiring authentication
module Authentication
    extend ActiveSupport::Concern

    included do
        # before_action :redirect_if_not_auth
        before_action :unauthorize_if_not_authenticated
    end

    def unauthorize_if_not_authenticated
        render status: :unauthorized, json: { error: "Authentication required" } unless user_signed_in?
    end

    # def redirect_if_not_auth
    #     redirect_to root_path, alert: "Authentication required" unless user_signed_in?
    # end

    # def login
    #     # do firebase authentication
    #     session[:user_id]
    # end

    # def logout
    #     User.update_columns(auth_token: nil)
    #     reset_session
    # end

    def user_signed_in?
        user = User.find_by(id: session[:user_id])
        # user.present? && user.auth_token.present? && (params[:auth_token] == user.auth_token)
        user.present?
    end
end