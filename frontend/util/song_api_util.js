export const fetchSongs = (id) => {
    return $.ajax({
        method:'get',
        url:`api/albums/${id}/songs`,
    });
};

export const fetchAlbum = (albumId) => {
    return $.ajax({
        method:'get',
        url: `api/albums/${albumId}`
    })
}

export const fetchAlbums = () => {
    return $.ajax({
        method:'get',
        url: 'api/albums'
    });
};

export const fetchSong = (songId) => {
    return $.ajax({
        method: 'get',
        url: `api/songs/${songId}`
    });
};



