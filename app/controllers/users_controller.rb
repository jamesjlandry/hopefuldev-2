class UsersController < ApplicationController

    def create
        user = User.create({username: params[:username], password: params[:password]})
           if user.save
            session[:user_id] = user.id
            render json: user
           else 
            render json: nil 
           end
    end
end