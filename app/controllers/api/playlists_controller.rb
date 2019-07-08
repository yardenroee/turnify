class Api::PlaylistsController < ApplicationController

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id
        if @playlist.save
            render "api/playlists/show"

        else
            render json: @playlist.errors.full_messages, status: 422
    end

  def destroy
    @playlist = Playlist.find(params[:id])

    if @playlist 
      @playlist.destroy 
    else
      render json: ['Playlist cannot be found']
    end
  end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end

end