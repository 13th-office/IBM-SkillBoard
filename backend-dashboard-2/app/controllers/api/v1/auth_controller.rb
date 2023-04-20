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
      puts data['idToken']
      session[:user_id] = data['localId']
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
