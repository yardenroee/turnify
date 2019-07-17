require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
## DEMO USER ##
demo_user = User.create(username:"demo", password:"123456")
## DEMO USER ##

##Artist 1 ##
artist1 = Artist.create(name:"Becays")
artist1.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/becays-artist.jpg"), filename:"becays.jpg")
artist1.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/becays-cover-art.jpg"), filename:"becays-hover.jpg")

####### ALBUM 1 #######

album1= Album.create(title:"Pressures", release_year: 2015, artist_id: artist1.id)
album1.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/pressures/Pressures+EP.jpg"), filename:"pressures-cover.jpg")

song1 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Disc Over", length: "4:06")

song2 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Housy", length: "3:59")

song3 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Karma", length: "5:12")

song4 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Move In", length: "3:41")

song5 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Pressures", length: "4:11")

song1.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/pressures/Becays-Disc+Over.mp3"), filename:"song1.mp3")
song2.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/pressures/Becays-Housy.mp3"), filename:"song2.mp3")
song3.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/pressures/Becays-Karma.mp3"), filename:"song3.mp3")
song4.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/pressures/Becays-Move+in.mp3"), filename:"song4.mp3")
song5.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/pressures/Becays-Pressures.mp3"), filename:"song5.mp3")

####### ALBUM 2 #######
album2= Album.create(title:"Set You Free", release_year: 2015, artist_id: artist1.id)
album2.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/setyoufree/Set+You+Free+EP.jpg"), filename:"setyoufree.jpg")


song6 = Song.create(album_id: album2.id, artist_id: artist1.id, title: "Beach Club", length: "3:32")

song7 = Song.create(album_id: album2.id, artist_id: artist1.id, title: "Coconuts", length: "4:04")

song8 = Song.create(album_id: album2.id, artist_id: artist1.id, title: "Insanity", length: "4:04")

song9 = Song.create(album_id: album2.id, artist_id: artist1.id, title: "Let's Go Maestro", length: "3:34")

song10 = Song.create(album_id: album2.id, artist_id: artist1.id, title: "Set You Free", length: "4:27")

song6.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/setyoufree/Becays-Beach+Club.mp3"), filename:"song6.mp3")
song7.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/setyoufree/Becays-Coconuts.mp3"), filename:"song7.mp3")
song8.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/setyoufree/Becays-Insanity.mp3"), filename:"song8.mp3")
song9.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/setyoufree/Becays-Let_s+Go+Maestro.mp3"), filename:"song9.mp3")
song10.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/becays/setyoufree/Becays-Set+You+Free.mp3"), filename:"song10.mp3")
##Artist 1 ##



## Artist 2 ##
artist2 = Artist.create(name:"DJ Chill")
artist2.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/dj-chill.jpg"), filename:"djchill.jpg")
artist2.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/chill-cover.jpeg"), filename:"chill-hover.jpg")

####### ALBUM 3 #######
album3= Album.create(title:"Jazz Chill Music", release_year: 2017, artist_id: artist2.id)
album3.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/Cover.jpg"), filename:"jazzchill.jpg")

song11 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "My Funny Valentine", length: "3:05")

song12 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "In a Sentimental Mood", length: "4:44")

song13 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "Stella by Starlight", length: "4:51")

song14 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "Satin Doll", length: "4:34")

song15 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "Georgia on My Mind", length: "5:23")

song16 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "Summertime", length: "3:05")

song17 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "The Night has a Thousand Eyes", length: "5:24")

song18 = Song.create(album_id: album3.id, artist_id: artist2.id, title: "Autumn in New York", length: "4:47")


song11.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/01.+My+Funny+Valentine+(Funky+Lounge+Mix).mp3"), filename:"song11.mp3")
song12.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/02.+In+a+Sentimental+Mood+(Cool+Jazz).mp3"), filename:"song12.mp3")
song13.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/03.+Stella+by+Starlight+(Guitar+Saxophone+%26+Flute).mp3"), filename:"song13.mp3")
song14.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/04.+Satin+Doll+(Brazilian+Rhythm).mp3"), filename:"song14.mp3")
song15.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/05.+Georgia+on+My+Mind+(Lounge+Music).mp3"), filename:"song15.mp3")
song16.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/06.+Summertime+(Lounge+Music).mp3"), filename:"song16.mp3")
song17.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/07.+The+Night+Has+a+Thousand+Eyes+(Cool+Mix).mp3"), filename:"song17.mp3")
song18.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/djchill/08.+Autumn+in+New+York+(Ultra+Lounge+Music).mp3"), filename:"song18.mp3")

## Artist 2 ##


## Artist 3 ##
artist3 = Artist.create(name:"Filmico")
artist3.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/filmico-artist.jpeg"), filename:"filmico.jpg")
artist3.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/filmico-cover.jpg"), filename:"filmico-hover.jpg")

####### ALBUM 3 #######
album4= Album.create(title:"Jazz Chill Music", release_year: 2017, artist_id: artist3.id)
album4.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/In+the+Senses.jpg"), filename:"inthesenses.jpg")

song19 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Memory Trees", length: "2:29")

song20 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Quest", length: "2:52")

song21 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Thinking About You Again", length: "3:13")

song22 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Carpark Scene", length: "2:14")

song23 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "No Sense of Distance", length: "3:17")

song24 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Intervalo", length: "1:27")

song25 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Les Visitants", length: "2:40")

song26 = Song.create(album_id: album4.id, artist_id: artist3.id, title: "Fading Saturday", length: "3:02")


song19.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/01+-+Memory+Trees.mp3"), filename:"song11.mp3")
song20.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/02+-+Quest.mp3"), filename:"song12.mp3")
song21.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/03+-+Thinking+About+You+Again.mp3"), filename:"song13.mp3")
song22.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/04+-+Carpark+Scene.mp3"), filename:"song14.mp3")
song23.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/05+-+No+Sense+of+Distance.mp3"), filename:"song15.mp3")
song24.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/06+-+Intervalo.mp3"), filename:"song16.mp3")
song25.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/07+-+Les+Visitants.mp3"), filename:"song17.mp3")
song26.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/filmico/08+-+Fading+Saturday.mp3"), filename:"song18.mp3")


## Artist 3 ##