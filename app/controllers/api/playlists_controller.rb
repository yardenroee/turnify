require 'open-uri'

class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.includes(:songs).includes(:user).with_attached_photo
    end

    def show
        @playlist = Playlist.find_by(id: params[:id])
        @albums = @playlist.albums.uniq
        @artists = @playlist.artists.uniq
         if @playlist
          render "api/playlists/show"
         else
         render json: ['Playlist cannot be found']
        end
    end

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id
        @playlist.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/playlist.png"), filename:"playlist.png")

        if @playlist.save
            render "api/playlists/new"
        else
            render json: @playlist.errors.full_messages, status: 422
        end
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