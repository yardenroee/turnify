import { connect } from 'react-redux';
import PlayBar from './play_bar';
import {fetchSong} from '../../actions/song_actions';
import { withRouter } from 'react-router';

const msp = (state) => {
    if(state.ui.currentPlayingSong) {
        const currentPlayingSong = state.ui.currentPlayingSong;
        const album = state.entities.albums[state.ui.currentPlayingSong.album_id];
        const artist = state.entities.artists[state.ui.currentPlayingSong.artist_id];
        return {
            album,
            artist,
            currentPlayingSong
        }
    } else {
        return {};
    }
};

const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
    };
};
export default withRouter(connect(msp,mdp)(PlayBar));