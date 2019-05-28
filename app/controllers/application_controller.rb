class ApplicationController < ActionController::Base
      #CELLL
  helper_method :current_user, :logged_in?

  def current_user 
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    unless logged_in?
      render json: {session: ['Invalid Credentials']}, status: 401
    end
  end

  def login!(user)
    session[:session_token] = user.reset_session_token
    @current_user = user
  end

  def logout!
    session[:session_token] = nil
    current_user.reset_session_token
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end
end
