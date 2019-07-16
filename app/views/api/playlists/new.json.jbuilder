json.playlist do
  json.extract! @playlist, :id, :title, :user_id, :song_ids
  if @playlist.photo.attached?
    json.photo url_for(@playlist.photo)
  end
end
