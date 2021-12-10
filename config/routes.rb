Rails.application.routes.draw do
  # get 'homes/index'
  root 'homes#index'
  get 'homes', to: 'homes#index'
  # get 'restaurants'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
