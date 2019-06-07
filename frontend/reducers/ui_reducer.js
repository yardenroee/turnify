import { combineReducers } from 'redux';
import CurrentSongReducer from './current_song_reducer';


export default combineReducers({
    currentPlayingSong : CurrentSongReducer
})