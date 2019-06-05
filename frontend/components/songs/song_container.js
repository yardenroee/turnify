import Songs from "./songs";
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
const msp = (state, {props}) => {
    const albumId = parseInt(props.match.params.albumId)
    const album = state.entities.albums[albumId];
    const songs = Object.values(state.entities.songs);
    return {
        albumId,
        album,
        songs
    }
}


const mdp = dispatch => {
    return {
        fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
    }
}

export default (connect(msp,mdp)(Songs));