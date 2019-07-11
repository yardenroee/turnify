import * as SongApiUtil from '../util/song_api_util';
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const CLEAR_ALBUM_SONGS = "CLEAR_ALBUM_SONGS";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const FETCH_NEXT_SONG = "FETCH_NEXT_SONG";
export const FETCH_PREV_SONG = "FETCH_PREV_SONG";
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


export const togglePlay = (boolean) => {
    return{
        type: TOGGLE_PLAY,
        boolean
    }
}

export const receiveNextSong = song => {
    return {
        type: FETCH_NEXT_SONG,
        song
    }
}

export const receivePrevSong = song => {
    return {
        type: FETCH_PREV_SONG,
        song
    }
}

export const clearAlbumSongs = () => {
    return {
        type: CLEAR_ALBUM_SONGS,
    }
}

export const fetchSong = (songId) => dispatch => (
 SongApiUtil.fetchSong(songId).then(song => dispatch(receiveSong(song)))
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

export const fetchNextSong = (songId) => dispatch => {
    return SongApiUtil.fetchSong(songId).then( (song)=> dispatch(receiveNextSong(song)))
}

export const fetchPrevSong = (songId) => dispatch => {
    return SongApiUtil.fetchSong(songId).then((song) => dispatch(receivePrevSong(song)))
}