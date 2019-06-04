# json.album do
#     json.extract! @album, :id, :title, :artist_id, :release_year
# end
    @songs.each do |song|
        json.set! song.id do
            json.partial! "api/songs/song", song:song
        end
    end