import { combineReducers } from 'redux';
import CurrentSongReducer from './current_song_reducer';
import SearchReducer from './search_reducer';
import modal from './modal_reducer';
import optionalPropsReducer from './optional_props_reducer';


export default combineReducers({
    modal,
    currentPlayingSong : CurrentSongReducer,
    search : SearchReducer,
    optional_props: optionalPropsReducer,

})