Rails.application.routes.draw do
  get '/logged_in', to: 'sessions#logged_in'
  post '/login', to: 'sessions#login'
  delete '/log_out', to: 'sessions#log_out'
  resources :posts
  resources :users
  get '*path', to: 'application#frontend'
end
