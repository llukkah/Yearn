Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  
  resources :users do
    resources :locations do
      resources :tasks
    end
  
  resources :users


  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
