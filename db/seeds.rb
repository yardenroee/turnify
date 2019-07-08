require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

####### ALBUM 1 #######
demo_user = User.create(username:"demo", password:"123456")
playlist1 = Playlist.create(title: "trashy gorlz holla", user_id:1)
artist1 = Artist.create(name:"Garbagiana")

album1= Album.create(title:"Trashy", release_year: 2015, artist_id: artist1.id)

song1 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Sis U Slay Moi", length: "4:27")

song2 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "GIT INNIT MAN", length: "3:15")

song3 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "U R Garbage", length: "3:05")

song4 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "H8rs Wanna Fight Me", length: "3:41")

song5 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Dumpster Divin", length: "3:54")

artist1.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/garbagiana.jpg"), filename:"garbagiana.jpg")
album1.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/garbagiana-cover.jpg"), filename:"trashy-cover.jpg")
artist1.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/garbagiana.jpg"), filename:"garbagiana-hover.jpg")
playlist1.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/garbagiana.jpg"), filename:"garbagiana.jpg")
song1.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/01.+Lady+Vengeance.mp3"), filename:"song1.mp3")
song2.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/02.+Death+Grip+Ft.+Bbymutha.mp3"), filename:"song2.mp3")
song3.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/03.+Sugarfalls.mp3"), filename:"song3.mp3")
song4.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/04.+Learning+Ft.+Miss+Prada.mp3"), filename:"song4.mp3")
song5.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/05.+Frozen+Over+Ft.+Cakes+Da+Killa.mp3"), filename:"song5.mp3")

####### ALBUM 2 #######
artist2 = Artist.create(name:"Cisgusting")

album2= Album.create(title:"Flawless Victory", release_year: 2016, artist_id: artist2.id)

song6 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "U Cisgust Me!", length: "3:16")

song7 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "White Guilt", length: "3:42")

song8 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "Positive Healing", length: "4:54")

song9 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "Leave Britney Alone", length: "3:37")

song10 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "Paris Hilton Is My Mom", length: "3:15")
file = open("https://turnifyappprod.s3.amazonaws.com/cisgusting.jpg")
artist2.photo.attach(io: file, filename:"cisgusting.jpg")
album2.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/cisgusting-cover.jpg"), filename:"cisgusting-cover.jpg")
artist2.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/cisgusting-hover.jpg"), filename:"cisgusting-hover.jpg")

song6.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/06.+Love+Taps.mp3"), filename:"song6.mp3")
song7.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/07.+Freestyle+4+(Remix).mp3"), filename:"song7.mp3")
song8.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/08.+Angel+Dust.mp3"), filename:"song8.mp3")
song9.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/09.+On+Fire+Ft.+Beek.mp3"), filename:"song9.mp3")
song10.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/02.+Death+Grip+Ft.+Bbymutha.mp3"), filename:"song1.mp3")
####### ALBUM 3 #######
artist3 = Artist.create(name:"Renta Karr")

album3= Album.create(title:"Cher In The 70's", release_year: 2017, artist_id: artist3.id)

song11 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "Drag Her", length: "4:27")

song12 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "I'm Feeling Jujed", length: "3:15")

song13 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "Miss Vanjie!!!", length: "3:05")

song14 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "I FEEL VERY ATTACKED", length: "3:41")

song15 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "TBH Ur Cancelled...", length: "3:54")

artist3.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/large.jpg"), filename:"renta.jpg")
album3.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/alaska-cover.jpg"), filename:"renta-cover.jpg")
artist3.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/rentakarr-hover.jpg"), filename:"renta-hover.jpg")

song11.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/01.+Lady+Vengeance.mp3"), filename:"song1.mp3")
song12.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/02.+Death+Grip+Ft.+Bbymutha.mp3"), filename:"song2.mp3")
song13.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/03.+Sugarfalls.mp3"), filename:"song3.mp3")
song14.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/04.+Learning+Ft.+Miss+Prada.mp3"), filename:"song4.mp3")
song15.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/05.+Frozen+Over+Ft.+Cakes+Da+Killa.mp3"), filename:"song5.mp3")
