Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :certificates
      # resources :auth
      post "login", to: "auth#login"
      post "logout", to: "auth#logout"

      end
  end
    
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
end
