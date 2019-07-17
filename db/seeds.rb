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
album4= Album.create(title:"In the Senses", release_year: 2017, artist_id: artist3.id)
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


## Artist 4 ##
artist4 = Artist.create(name:"JekK")
artist4.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/jekk-artist.jpg"), filename:"jekk-artist.jpg")
artist4.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/jekk-cover.jpg"), filename:"jekk-hover.jpg")

## Album 5 ##
album5= Album.create(title:"Roses", release_year: 2017, artist_id: artist4.id)
album5.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/Roses.jpg"), filename:"roses.jpg")

song27 = Song.create(album_id: album5.id, artist_id: artist4.id, title: "Delightful Life", length: "3:27")

song28 = Song.create(album_id: album5.id, artist_id: artist4.id, title: "Hold You", length: "3:07")

song29 = Song.create(album_id: album5.id, artist_id: artist4.id, title: "Roses", length: "3:50")

song30 = Song.create(album_id: album5.id, artist_id: artist4.id, title: "Sorrow is Gone", length: "2:59")

song31 = Song.create(album_id: album5.id, artist_id: artist4.id, title: "Survive", length: "2:44")

song32 = Song.create(album_id: album5.id, artist_id: artist4.id, title: "Weakness", length: "3:14")

song27.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/JekK-Delightful+Life.mp3"), filename:"song11.mp3")
song28.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/JekK-Hold+you.mp3"), filename:"song12.mp3")
song29.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/JekK-Roses.mp3"), filename:"song13.mp3")
song30.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/JekK-Sorrow+is+Gone.mp3"), filename:"song14.mp3")
song31.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/JekK-Survive.mp3"), filename:"song15.mp3")
song32.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/jekk/JekK-Weakness.mp3"), filename:"song16.mp3")
## Album 5 ##

## Artist 4 ##


## Artist 5 ##
artist5 = Artist.create(name:"madelyniris")
artist5.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyn-artist.jpg"), filename:"madelyn-artist.jpg")
artist5.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyn-cover.jpeg"), filename:"madelyn-hover.jpg")

## Album 6 ##
album6= Album.create(title:"Adventures", release_year: 2017, artist_id: artist5.id)
album6.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/Adventures.jpg"), filename:"adventures.jpg")

song33 = Song.create(album_id: album6.id, artist_id: artist5.id, title: "Adventure", length: "3:59")

song34 = Song.create(album_id: album6.id, artist_id: artist5.id, title: "Ghost", length: "4:34")

song35 = Song.create(album_id: album6.id, artist_id: artist5.id, title: "Leave and Never Look Back", length: "4:09")

song36 = Song.create(album_id: album6.id, artist_id: artist5.id, title: "Lets Restart", length: "4:57")

song37 = Song.create(album_id: album6.id, artist_id: artist5.id, title: "Street Signs and White Lies", length: "3:49")

song33.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyniris-Adventure.mp3"), filename:"song11.mp3")
song34.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyniris-Ghost.mp3"), filename:"song12.mp3")
song35.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyniris-Leave+and+Never+Look+Back.mp3"), filename:"song13.mp3")
song36.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyniris-Lets+Restart.mp3"), filename:"song14.mp3")
song37.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/madelyniris/madelyniris-Street+Signs+and+White+Lies.mp3"), filename:"song15.mp3")
## Album 6 ##

## Artist 5 ##


## Artist 6 ##
artist6 = Artist.create(name:"Matt Confusion")
artist6.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/matt-artist.jpeg"), filename:"matt-artist.jpg")
artist6.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Else.jpg"), filename:"matt-hover.jpg")
## Album 7 ##
album7= Album.create(title:"Else", release_year: 2017, artist_id: artist6.id)
album7.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Else.jpg"), filename:"Else.jpg")

song38 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "A Million Tunes", length: "3:39")

song39 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Below", length: "5:15")

song40 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Closed Down", length: "4:03")

song41 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Happy that You Tried", length: "4:50")

song42 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Pride", length: "3:27")

song43 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Right or Wrong", length: "2:51")

song44 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Things We Said", length: "4:20")

song45 = Song.create(album_id: album7.id, artist_id: artist6.id, title: "Wildcat", length: "4:36")


song38.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-A+million+tunes.mp3"), filename:"song11.mp3")
song39.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Below.mp3"), filename:"song12.mp3")
song40.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Closed+Down.mp3"), filename:"song13.mp3")
song41.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Happy+that+you+tried.mp3"), filename:"song14.mp3")
song42.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Pride.mp3"), filename:"song15.mp3")
song43.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Right+or+wrong.mp3"), filename:"song15.mp3")
song44.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Things+we+said.mp3"), filename:"song15.mp3")
song45.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/mattconfusion/Matt+Confusion-Wildcat.mp3"), filename:"song15.mp3")

## Album 7 ##

## Artist 6 ##


## Artist 7 ## 
artist7 = Artist.create(name:"Paolo Pavan")
artist7.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/pavan-artist.jpg"), filename:"pavan-artist.jpg")
artist7.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/cropped-Paolo-Pavan.jpg"), filename:"pavan-hover.jpg")

## Album 8 ##
album8= Album.create(title:"Hand", release_year: 2017, artist_id: artist7.id)
album8.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Black+Hand.jpg"), filename:"hand.jpg")

song46 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Hand", length: "4:29")

song47 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Bon Voyage", length: "5:59")

song48 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Footstep", length: "4:16")

song49 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Goin On", length: "6:57")

song50 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Gone With the Wind", length: "4:18")

song51 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Gone With the Wind (Sara Jazz)", length: "4:19")

song52 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "I'll Never Get Over You", length: "6:15")

song53 = Song.create(album_id: album8.id, artist_id: artist7.id, title: "Screw Up", length: "3:39")


song46.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Black+Hand.mp3"), filename:"song11.mp3")
song47.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Bon+Voyage.mp3"), filename:"song12.mp3")
song48.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Footstep.mp3"), filename:"song13.mp3")
song49.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Goin+On.mp3"), filename:"song14.mp3")
song50.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Gone+With+The+The+Wind.mp3"), filename:"song15.mp3")
song51.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Gone+With+The+Wind+_Sara+Jazz+Version_.mp3"), filename:"song15.mp3")
song52.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-I+ll+Never+Get+Over+You.mp3"), filename:"song15.mp3")
song53.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/paolopavan/Paolo+Pavan-Screw+Up.mp3"), filename:"song15.mp3")

## Album 8 ##

## Artist 7 ##


## Artist 8 ##
artist8 = Artist.create(name:"The Bourgeois")
artist8.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/bourgeoislogo-artist.png"), filename:"thebourg-artist.jpg")
artist8.header.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/the-bourgeois-cover.jpg"), filename:"thebourg-hover.jpg")

## Album 9 ##
album9= Album.create(title:"Soldier On", release_year: 2017, artist_id: artist8.id)
album9.photo.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/Soldier+On.jpg"), filename:"soldierOn.jpg")

song50 = Song.create(album_id: album9.id, artist_id: artist8.id, title: "Check My Pulse", length: "2:24")

song51 = Song.create(album_id: album9.id, artist_id: artist8.id, title: "Even Worse than I Imagined", length: "2:50")

song52 = Song.create(album_id: album9.id, artist_id: artist8.id, title: "My Old Friend Misery", length: "2:59")

song53 = Song.create(album_id: album9.id, artist_id: artist8.id, title: "Soldier On", length: "2:29")



song50.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/The+Bourgeois-Check+My+Pulse.mp3"), filename:"song11.mp3")
song51.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/The+Bourgeois-Even+Worse+Than+I+Imagined.mp3"), filename:"song12.mp3")
song52.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/The+Bourgeois-My+Old+Friend+Misery.mp3"), filename:"song13.mp3")
song53.mp3.attach(io: open("https://turnifyappprod.s3.amazonaws.com/thebourgeois/The+Bourgeois-Soldier+On.mp3"), filename:"song14.mp3")

## Album 9 ##

## Artist 8 ##
