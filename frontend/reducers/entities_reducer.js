import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import songReducer from './song_reducer';
import albumReducer from './album_reducer';
import artistReducer from './artist_reducer';
export default combineReducers({
    users: userReducer,
    albums: albumReducer,
    songs: songReducer,
    artists: artistReducer
});