export const fetchPlaylistSong = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/playlist_songs/${id}`
    })
}

export const createPlaylistSong = (playlistSong) => {
    return $.ajax({
        method: 'POST',
        url: "api/playlist_songs",
        data: { playlistSong }
    })
}

export const destroyPlaylistSong = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/playlist_songs/${id}`
    })
}


export const addPlaylistSong = (playlistId, songId) => {
    return $.ajax({
        method: 'POST',
        url: 'api/playlist_songs',
        data: {
            playlist_song: {
                playlist_id: playlistId,
                song_id: songId
            }
        }
    });
};


export const removePlaylistSong = (playlistId, songId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/playlist_songs/${playlistId}`,
        data: {
            playlist_song: {
                playlist_id: playlistId,
                song_id: songId
            }
        }
    });
};
