# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

####### ALBUM 1 #######
demo_user = User.create(username:"demo", password:"123456")

artist1 = Artist.create(name:"Garbagiana")

album1= Album.create(title:"Trashy", release_year: 2015, artist_id: artist1.id)

song1 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Sis U Slay Moi", length: "6:66")

song2 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "GIT INNIT MAN", length: "5:55")

song3 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "U R Garbage", length: "4:44")

song4 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "H8rs Wanna Fight Me", length: "3:33")

song5 = Song.create(album_id: album1.id, artist_id: artist1.id, title: "Dumpster Divin", length: "2:22")

artist1.photo.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/garbagiana.jpg"), filename:"garbagiana.jpg")
album1.photo.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/garbagiana-cover.jpg"), filename:"trashy-cover.jpg")
artist1.header.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/garbagiana-header.jpg"), filename:"garbagiana-hover.jpg")

song1.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/02. Death Grip Ft. Bbymutha.mp3"), filename:"song1.mp3")
song2.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/01. Lady Vengeance.mp3"), filename:"song2.mp3")
song3.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/03. Sugarfalls.mp3"), filename:"song3.mp3")
song4.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/04. Learning Ft. Miss Prada.mp3"), filename:"song4.mp3")
song5.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/05. Frozen Over Ft. Cakes Da Killa.mp3"), filename:"song5.mp3")

####### ALBUM 2 #######
artist2 = Artist.create(name:"Cisgusting")

album2= Album.create(title:"Flawless Victory", release_year: 2016, artist_id: artist2.id)

song6 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "U Cisgust Me!", length: "6:66")

song7 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "White Guilt", length: "5:55")

song8 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "Positive Healing", length: "4:44")

song9 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "Leave Britney Alone", length: "3:33")

song10 = Song.create(album_id: album2.id, artist_id: artist2.id, title: "Paris Hilton Is My Mom", length: "2:22")

artist2.photo.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/cisgusting.jpg"), filename:"cisgusting.jpg")
album2.photo.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/cisgusting-cover.jpg"), filename:"cisgusting-cover.jpg")
artist2.header.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/cisgusting-hover.jpg"), filename:"cisgusting-hover.jpg")

song6.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/06. Love Taps.mp3"), filename:"song6.mp3")
song7.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/07. Freestyle 4 (Remix).mp3"), filename:"song7.mp3")
song8.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/08. Angel Dust.mp3"), filename:"song8.mp3")
song9.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/09. On Fire Ft. Beek.mp3"), filename:"song9.mp3")
song10.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/02. Death Grip Ft. Bbymutha.mp3"), filename:"song1.mp3")
####### ALBUM 3 #######
artist3 = Artist.create(name:"Renta Karr")

album3= Album.create(title:"Cher In The 70's", release_year: 2017, artist_id: artist3.id)

song11 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "Drag Her", length: "6:66")

song12 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "I'm Feeling Jujed", length: "5:55")

song13 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "Miss Vanjie!!!", length: "4:44")

song14 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "I FEEL VERY ATTACKED", length: "3:33")

song15 = Song.create(album_id: album3.id, artist_id: artist3.id, title: "TBH Ur Cancelled...", length: "2:22")

artist3.photo.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/large.jpg"), filename:"renta.jpg")
album3.photo.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/alaska-cover.jpg"), filename:"renta-cover.jpg")
artist3.header.attach(io: File.open("/Users/yardennegri/Desktop/turnifyapp/active_storage_media/rentakarr-hover.jpg"), filename:"renta-hover.jpg")

song11.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/02. Death Grip Ft. Bbymutha.mp3"), filename:"song1.mp3")
song12.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/01. Lady Vengeance.mp3"), filename:"song2.mp3")
song13.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/03. Sugarfalls.mp3"), filename:"song3.mp3")
song14.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/04. Learning Ft. Miss Prada.mp3"), filename:"song4.mp3")
song15.mp3.attach(io: File.open("/Users/yardennegri/Desktop/LSDXOXO - Fuck Marry Kill/05. Frozen Over Ft. Cakes Da Killa.mp3"), filename:"song5.mp3")
