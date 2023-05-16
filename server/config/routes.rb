Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users
      resources :employees do
        get "viewer", on: :collection
        get "myteamviewer", on: :collection
      end
      resources :certificates do
        post 'mass_create', on: :collection
      end
      resources :manager_teams
      resources :employee_teams
      resources :teams
      resources :certificate_categories
      resources :categories
      resources :certificate_employees

      post "login", to: "auth#login"
      post "logout", to: "auth#logout"

      end
  end
    
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
end
