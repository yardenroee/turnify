json.album do
    json.extract! @album, :id, :title, :artist_id, :release_year
    if @album.photo.attached?
        json.photo url_for(@album.photo)
    end
end

json.artist do 
    json.extract! @album.artist, :id, :name
    if @album.artist.photo.attached?
        json.photo url_for(@album.artist.photo)
    end
end

