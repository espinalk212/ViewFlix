Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create] do
      resources :playlists, only: [ :show, :update ] 
    end
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
  end

end
