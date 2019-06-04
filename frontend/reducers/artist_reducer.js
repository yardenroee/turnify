import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";
import { RECEIVE_ALBUM } from "../actions/song_actions";
export default (oldState = {}, action ) => {
    switch (action.type) {
        case RECEIVE_ALBUM:
            return action.artist;
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:    
            return {[action.artist.id] : action.artist};
        default:
            return oldState;
    }
}