import Songs from "./songs";
import { connect } from 'react-redux';
import { fetchSongs,fetchSong } from '../../actions/song_actions';
const msp = (state, {props}) => {
    const albumId = parseInt(props.match.params.albumId)
    const album = state.entities.albums[albumId];
    const songs = Object.values(state.entities.songs);
    const currentPlayingSong = state.ui.currentPlayingSong || songs[0];
    return {
        albumId,
        album,
        songs,
        currentPlayingSong
    }
}


const mdp = dispatch => {
    return {
        fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
        fetchSong: (songId) => dispatch(fetchSong(songId))
    }
}

export default (connect(msp,mdp)(Songs));