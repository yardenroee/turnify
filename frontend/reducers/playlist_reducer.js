import { merge } from 'lodash';
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions'
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from '../actions/search_actions';
const playlistReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return merge({}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            return merge({}, state, { [action.data.playlist.id]: action.data.playlist });
        case REMOVE_PLAYLIST:
            newState = merge({}, state);
            delete newState[action.playlistId];
            return newState;
        case RECEIVE_ALL_SEARCHES:
            if(action.playlists === undefined){
                return state;
            }
            return action.playlists;
        case CLEAR_SEARCH:
            return {};
        default:
            return state;
    }
}

export default playlistReducer;