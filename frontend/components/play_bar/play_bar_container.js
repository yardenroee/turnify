import { connect } from 'react-redux';
import PlayBar from './play_bar';
import { fetchSong} from '../../actions/song_actions';

const msp = state => {
    const artist = state.entities.artists;
    const songs = state.entities.songs;
    if (state.ui.currentPlayingSong) {
        const playing = state.ui.currentPlayingSong.playing || null;
        return {
            artist,
            playing,
            songs
        };
    } else {
        return {
            artist,
            songs
        }
    }
};

const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
    };
};
export default connect(msp,mdp)(PlayBar);