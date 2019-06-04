import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";
import merge from 'lodash/merge';
export default (oldState = {}, action ) => {
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:    
            return {[action.artist.id] : action.artist};
        default:
            return oldState;
    }
}