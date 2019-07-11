import * as CurrentSongApiUtil from '../util/song_api_util'
export const RECEIVE_PLAYING_SONG = "RECEIVE_PLAYING_SONG";
export const PREV_PLAYING_SONG = "PREV_PLAYING_SONG";
export const NEXT_PLAYING_SONG = "NEXT_PLAYING_SONG";

const receivePlayingSong = (song) => {
    return {
        type: RECEIVE_PLAYING_SONG,
        song
    }
}

const prevPlayingSong = (song) => {
    return {
        type: PREV_PLAYING_SONG,
        song
    }
}

const nextPlayingSong = (song) => {
    return {
        type: NEXT_PLAYING_SONG,
        song
    }
}


export const fetchPlayingSong = (songId) => dispatch => (
    CurrentSongApiUtil.fetchSong(songId).then( song => dispatch(receivePlayingSong(song)))
)


export const fetchPrevSong = (songId) => dispatch => (
    CurrentSongApiUtil.fetchSong(songId).then(song => dispatch(prevPlayingSong(song)))
)

export const fetchNextSong = (songId) => dispatch => (
    CurrentSongApiUtil.fetchSong(songId).then(song => dispatch(nextPlayingSong(song)))
)
