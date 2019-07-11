import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from "../actions/song_actions";
import { RECEIVE_ARTIST } from "../actions/artist_actions";
import { merge } from 'lodash';

export default (oldState= {}, action) => {
    switch (action.type) {
        case RECEIVE_ALBUM:
            return merge({}, oldState, {[action.album.id] : action.album});
        case RECEIVE_ALL_ALBUMS:
            
            return action.albums
        case RECEIVE_ARTIST:
            debugger
            return merge({}, oldState, action.albums);
        default:
            return oldState;
    }
};