 class Api::SearchesController < ApplicationController
    def show
        if params[:id] == ""
        @artists = []
        else
            str = "%#{params[:id]}%"
            @artists = Artist.where("UPPER(artists.name) LIKE UPPER(:query)", query: str)
            @artists = @artists.uniq

            @albums = Album.joins("JOIN songs ON songs.album_id = albums.id")
            .where("UPPER(albums.title) LIKE UPPER(:query) OR UPPER(songs.title) LIKE UPPER(:query)", query: str)
            @albums = @albums.uniq

            @playlists = Playlist.joins("JOIN playlist_songs ON playlist_songs.playlist_id = playlists.id")
            .joins("JOIN songs ON playlist_songs.song_id = songs.id")
            .where("UPPER(playlists.title) LIKE UPPER(:query) OR UPPER(songs.title) LIKE UPPER(:query)", query: str)
            @playlists = @playlists.uniq
        end
        render :show
    end

 end