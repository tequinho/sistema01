Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'home/index'
  root to: 'home#index'
  get 'home/ministerios'
  get 'home/pastores'
end
