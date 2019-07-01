import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { togglePlay} from '../../actions/song_actions';

const msp = state => {
    const songs = state.entities.songs;
    if (state.ui.currentPlayingSong) {
        const playing = state.ui.currentPlayingSong.playing || null;
        return {
            playing,
            songs
        };
    } else {
        return {
            songs
        }
    }
};

const mdp = dispatch => {
    return {
        togglePlay: (boolean) => dispatch(togglePlay(boolean)),
    };
};

export default connect(msp,mdp)(AudioPlayer);
