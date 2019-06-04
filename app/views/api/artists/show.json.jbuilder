json.extract! @artist, :id, :name

if @artist.photo.attached? 
    json.photo url_for(@artist.photo)
end
