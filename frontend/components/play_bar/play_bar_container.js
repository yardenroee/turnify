import { connect } from 'react-redux';
import PlayBar from './play_bar';
import { fetchSong,togglePlay } from '../../actions/song_actions';

const msp = state => {
    const artist = state.entities.artists;
    if (state.ui.currentPlayingSong) {
        const playing = state.ui.currentPlayingSong.playing || null;
        return {
            artist,
            playing
        };
    } else {
        return {
            artist
        }
    }
};

const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
        togglePlay: (boolean) => dispatch(togglePlay(boolean))
    };
};
export default connect(msp,mdp)(PlayBar);