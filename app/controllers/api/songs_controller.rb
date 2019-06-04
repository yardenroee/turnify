class Api::SongsController < ApplicationController
    def show
        @song = Song.find_by(id: params[:id])
        if @song
            render "api/songs/show"
        else
            render json: ['Song does not exist'], status: 401
        end
    end

    def index
        @album = Album.find_by(id: params[:album_id])
        @songs = @album.songs
        if @songs
            render "api/songs/index"
        else 
            render json: ['Album does not exist'], status: 401
        end
    end
end
