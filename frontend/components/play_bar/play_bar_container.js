import { connect } from 'react-redux';
import PlayBar from './play_bar';
import {fetchSong} from '../../actions/song_actions';

const msp = state => {
    const artist = state.entities.artists;
        return {
            artist,
        };
};

const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
    };
};
export default connect(msp,mdp)(PlayBar);