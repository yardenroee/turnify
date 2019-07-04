artist_ids = []
json.artists do
    @artists.each do |artist|
        artist_ids.push(artist.id)
        json.set! artist.id do
            json.extract! artist, :id, :name
            json.photo url_for(artist.photo)
        end
    end
end


json.search_ids artist_ids