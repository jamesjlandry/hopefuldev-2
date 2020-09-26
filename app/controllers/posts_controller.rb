class PostsController < ApplicationController

    def index
        posts = Post.all

        render json: posts
    end

    def show
        post = Post.find_by(id: params[:id])
        
        render json: post
    end

    def create
        
        post = Post.create({title: params[:title], content: params[:content], date_formatted: params[:date_formatted], date_pretty: params[:date_pretty], user_id: params[:user_id]})
            if post.save 
                render json: post 
            else
                render json: {errors: post.errors.full_messages}
            end
    end

    def update

        post = Post.find_by(id: params[:id])
        post.update({title: params[:title], content: params[:content]})

        if post.save 
            render json: post
        else
            render json: {errors: post.errors.full_messages}
        end
    end


end