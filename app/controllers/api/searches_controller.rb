class Api::SearchesController < ApplicationController
    def show
        if params[:id] == ""
        @artists = []
        else
            str = "%#{params[:id]}%"
            @artists = Artist.where("UPPER(artists.name) LIKE UPPER(:query)", query: str)
            # .joins("JOIN albums ON albums.artist_id = artists.id")
            # .joins("JOIN songs ON songs.album_id = albums.id")
            # .where("UPPER(artists.name) LIKE UPPER(:query) OR UPPER(albums.title) LIKE UPPER(:query) OR UPPER(songs.title) LIKE UPPER(:query)", query: str)
            @artists = @artists.uniq

            @albums = Album.where("UPPER(albums.title) LIKE UPPER(:query)", query: str)
            @albums = @albums.uniq
        end
        render :show
    end

end