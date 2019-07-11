json.playlist do
  json.extract! @playlist, :id, :title, :user_id, :song_ids
  if @playlist.photo.attached?
    json.photo url_for(@playlist.photo)
  end
end

json.songs do 
  @playlist.songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :title, :album_id, :artist, :length
      json.artist song.artist.name
      json.artist_id song.artist.id
      json.album song.album.title
    end
  end
end  

json.albums do
  @albums.each do |album|
    json.set! album.id do 
      json.extract! album, :id, :title, :artist_id
      json.photo url_for(album.photo)
      end
    end
end

json.artists do 
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
    end
  end
end