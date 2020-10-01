Rails.application.routes.draw do
  get 'home/home'
  root to: "home#home"
  get 'test/test'
  get 'home/new'
  get 'home/test'
end
