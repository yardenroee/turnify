import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchSong, fetchNextSong, fetchPrevSong, togglePlay} from '../../actions/song_actions';

const msp = state => {
    const songs = Object.values(state.entities.songs);
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
        fetchNextSong: (songId) => dispatch(fetchNextSong(songId)),
        fetchPrevSong: (songId) => dispatch(fetchPrevSong(songId)),
        fetchSong: (songId) => dispatch(fetchSong(songId)),
    };
};

export default connect(msp,mdp)(AudioPlayer);
