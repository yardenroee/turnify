@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name
        if artist.photo.attached? 
            json.photo url_for(artist.photo)
        end
    end
end