# Turnify

Turnify was inspired by Spotify, a music streaming service allowing users stream music, search for artists and albums, create playlists, and follow other users.

   ![alt text](https://i.ibb.co/HBdMKRB/Screen-Shot-2019-06-27-at-11-04-17-AM-2.png)


 ## Technologies Used
 * Turnify was created with Rails on the backend using a PostgreSQL database and React/Redux on the frontend.
 * Images and MP3 files were stored on AWS S3, increasing scalability
 * The loading time of the app was optimized through jBuilder and Rails' Active Storage. Fewer interactions with the database     helps increase user experience.
 
    ![alt text](https://i.ibb.co/zZkdQz5/Screen-Shot-2019-07-05-at-12-43-53-PM.png)

## Key Features
 * Progress Bar
   The dynamic progress bar allows users to play and pause songs. To do this, I created a reference to both the progress bar      and the audio player using a React element, createRef. The user is also able to choose what part of the song they want to      move to using the progress bar. I was able to accomplish this by using percentages, thinking of the progress bar as a          whole, and calculating the percent change based on the user's click location.

 * Search
   Users are also able to search for playlists, artists, and albums. I implemented a dynamic search bar that immediately          updates the possible artists as the user types on the keybaord.
   
   ![alt text](https://i.ibb.co/nM87nNS/Screen-Shot-2019-07-05-at-12-46-40-PM.png)
