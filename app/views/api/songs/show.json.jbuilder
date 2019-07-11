json.extract! @song, :id, :album_id, :artist_id, :title, :length
if @song.mp3.attached?
    json.mp3 url_for(@song.mp3)
end

