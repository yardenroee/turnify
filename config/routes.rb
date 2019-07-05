Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :songs, only:[:show]
    resources :albums, only:[:show,:index] do
      resources :songs, only:[:index]
    end
    resources :artists, only:[:show,:index] do
      resources :songs, only:[:index]
    end
    resources :searches, only:[:show]
    resources :playlists, only:[:create, :destroy, :show]
    resources :playlist_songs, only: [:show, :create, :destroy]

  end
end
