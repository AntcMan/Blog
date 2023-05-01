Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :blog_posts, only: [:index, :show, :new, :create, :destroy]

  # Defines the root path route ("/")
  root 'blog_posts#index'
  get 'new', to: 'blog_posts#new'
end
