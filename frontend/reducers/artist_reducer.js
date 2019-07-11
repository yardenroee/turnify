import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";
import { RECEIVE_ALBUM } from "../actions/song_actions";
import { merge } from 'lodash';

export default (oldState = {}, action ) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALBUM:
            debugger
            return merge({}, oldState, {[action.artist.id]: action.artist});
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:    
        debugger
            return merge({}, oldState,{[action.artist.id] : action.artist});
        default:
            return oldState;
    }
}