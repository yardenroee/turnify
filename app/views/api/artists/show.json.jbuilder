json.artist do
    json.extract! @artist, :id, :name
    if @artist.header.attached? 
        json.header url_for(@artist.header)
    end
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :release_year
        end
    end
end
