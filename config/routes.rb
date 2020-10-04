Rails.application.routes.draw do
  resources :lists
  root 'lists#index'

  # lists :test, only: [:create]
  # puts 'home/delete'
  # get 'create/create'
  # get 'home/home'
  # root to: "home#home"
  # get 'test/test'
  # get 'home/new'
  # get 'home/test'
end
