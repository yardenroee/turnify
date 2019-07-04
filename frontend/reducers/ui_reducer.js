import { combineReducers } from 'redux';
import CurrentSongReducer from './current_song_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
    currentPlayingSong : CurrentSongReducer,
    search : SearchReducer
})