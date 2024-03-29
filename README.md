# Turnify

Turnify was inspired by Spotify, a music streaming service allowing users stream music, search for artists and albums, create playlists, and follow other users.

   ![alt text](https://i.imgur.com/gQfxdXH.jpg)


 ## Technologies Used
 * Turnify was created with Rails on the backend using a PostgreSQL database and React/Redux on the frontend.
 * Images and MP3 files were stored on AWS S3, increasing scalability
 * The loading time of the app was optimized through jBuilder and Rails' Active Storage. Fewer interactions with the database     helps increase user experience.
 
## Key Features
 * Play Bar
   + The dynamic Play bar allows users to play and pause songs, as well as shuffle, repeat, play next and play previous songs. To do this, I created a reference to both the progress bar      and the audio player using a React element, createRef. The user is also able to choose what part of the song they want to      move to using the progress bar. I was able to accomplish this by using percentages, thinking of the progress bar as a          whole, and calculating the percent change based on the user's click location.

   ![alt text](https://i.imgur.com/wzkL0Os.png)

   ![alt text](https://github.com/yardenroee/turnify/blob/master/PlayBarFunctionality.gif?raw=true)

 * Search
      + Users are also able to search for playlists, artists, and albums. I implemented a dynamic search bar that immediatel          updates the possible artists, albums, and playlists as the user types on the keybaord.
   
   ![alt text](https://i.imgur.com/V0tduyN.png)

   ![alt text](https://github.com/yardenroee/turnify/blob/master/SearchFunctionality.gif?raw=true)

  * Playlist CRUD
    + Signed in users are able to create and delete their own playlists. Once created, the playlist shows up on the page  alongside all the playlists created by the use.

  * Playlist Songs
     + If you have playlists, you must also have songs! Every album has songs and users are given the ability to add songs through the albums show page through the playlist_songs association as well as the Add Song modal.

    ![alt text](https://i.imgur.com/c3vXWtU.png)
    
    ![alt text](https://github.com/yardenroee/turnify/blob/master/PlaylistCRUD.gif?raw=true)
