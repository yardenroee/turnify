    @albums.map do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :release_year
            if album.photo.attached?
                json.photo url_for(album.photo)
            end
        end
    end

