class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:notice] = "You are logged in!"
      redirect_to root_path
    else
      flash[:error] = "Something is wrong with your username or password, try again"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "You logged out. Have a good day!"
    redirect_to root_path
  end

end