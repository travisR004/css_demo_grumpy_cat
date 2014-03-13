NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  get 'about', to: "static_pages#about", as: "about"
  get 'contact', to: "static_pages#contact", as: "contact"
  root :to => "static_pages#home"
end
