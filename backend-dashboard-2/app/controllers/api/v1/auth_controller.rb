class Api::V1::AuthController < ApplicationController

  # POST /login
  def login
    email = params[:email]
    password = params[:password]

    uri = URI("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword")
        
    res = Net::HTTP.post_form(
      uri,
      'key' => ENV['FIREBASE_KEY'],
      'email' => email,
      'password' => password,
    )

    data = JSON.parse(res.body)

    if res.is_a?(Net::HTTPSuccess)
      session[:user_id] = data['localId']
      user = User.find_by(id: session[:user_id])
      employee = Employee.find_by(email: email)
      if employee.present?
        unless user.present?
          user = User.new(id: session[:user_id], email: email, employee_id: employee.id)
          user.save
        end

      else
        render status: :unprocessable_entity, json: { error: "Employee not found" }
      end
      render status: :ok, json: {idToken: data['idToken']}
    else
      render status: :unauthorized, json: { error: "Bad login credentials" }
    end
  end

  # POST /logout
  def logout
    session.clear
    head :ok
  end
  
end
