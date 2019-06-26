import Songs from "./songs";
import { connect } from 'react-redux';
import { fetchSongs,fetchSong, togglePlay } from '../../actions/song_actions';
const msp = (state, {props}) => {
    const albumId = parseInt(props.match.params.albumId);
    const album = state.entities.albums[albumId];
    const songs = Object.values(state.entities.songs);
    const currentPlayingSong = state.ui.currentPlayingSong || songs[0];
    if (currentPlayingSong !== undefined) {
        const playing = currentPlayingSong.playing || null;
        return {
            albumId,
            album,
            songs,
            currentPlayingSong,
            playing
        };
    } else {
        return {
            albumId,
            album,
            songs,
            currentPlayingSong
        };
    }
};


const mdp = dispatch => {
    return {
        fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
        fetchSong: (songId) => dispatch(fetchSong(songId)),
        togglePlay: (boolean) => dispatch(togglePlay(boolean))
    };
};

export default (connect(msp,mdp)(Songs));