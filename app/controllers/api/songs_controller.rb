class Api::SongsController < ApplicationController
    def show
        @song = Song.find(params[:id])
        if @song
            render "api/songs/show"
        else
            render json: ['Song does not exist'], status: 401
        end
    end

    def index
        @album = Album.find(params[:album_id])
        @songs = @album.songs
        if @songs
            render "api/songs/index"
        else 
            render json: ['Album does not exist'], status: 401
        end
    end
end
