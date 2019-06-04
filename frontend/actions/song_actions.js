import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
const receiveAllSongs = (songs) => {
    return {
        type: RECEIVE_ALL_SONGS,
        songs
    };
};


const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song
    }
}

const receiveAlbum = (payload) => {
    const { album, artist} = payload
    return {
        type: RECEIVE_ALBUM,
        album,
        artist
    }
}


const receiveAllAlbums = (albums) => {
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums
    }
}
export const fetchSong = (songId) => dispatch => (
 SongApiUtil.fetchSong(songId).then(song=> dispatch(receiveSong(song)))
)

export const fetchSongs = (albumId) => dispatch => {
    return SongApiUtil.fetchSongs(albumId).then(songs => {
        return dispatch(receiveAllSongs(songs))
    })
}

export const fetchAlbums = () => (dispatch) => (
    SongApiUtil.fetchAlbums().then(albums=> dispatch(receiveAllAlbums(albums)))
)

export const fetchAlbum = (albumId) => dispatch => {
    return SongApiUtil.fetchAlbum(albumId).then(album=>{
        return dispatch(receiveAlbum(album))})
}