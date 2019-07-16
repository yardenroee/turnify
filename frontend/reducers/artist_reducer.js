import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";
import { RECEIVE_ALBUM } from "../actions/song_actions";
import { merge } from 'lodash';
import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from "../actions/search_actions";
export default (oldState = {}, action ) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALBUM:
            return merge({}, oldState, {[action.artist.id]: action.artist});
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:    
            return merge({}, oldState,{[action.artist.id] : action.artist});
        case RECEIVE_PLAYLIST:
            return merge({}, oldState, action.data.artists);
        case RECEIVE_ALL_SEARCHES:
            if(action.artists === undefined) {
                return {};
            }
            return action.artists;
        default:
            return oldState;
    }
}