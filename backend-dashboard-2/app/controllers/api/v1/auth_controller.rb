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

    unless res.is_a?(Net::HTTPSuccess)
      render status: :unauthorized, json: { error: "Bad login credentials" }
      return
    end

    employee = Employee.find_by(email: email)
    unless employee.present?
      render status: :unauthorized, json: { error: "Employee not found" }
      return
    end

    session[:user_id] = data['localId']
    user = User.find_by(id: session[:user_id])
    if user.present?
      render status: :ok, json: { idToken: data['idToken'], newUser: 0 }
      return
    end

    user = User.new(id: session[:user_id], email: email, employee_id: employee.id)
    if user.save
      render status: :ok, json: { idToken: data['idToken'], newUser: 1 }
    else
      render status: :unprocessable_entity, json: user.errors
    end
  end

  # POST /logout
  def logout
    session.clear
    head :ok
  end
end
