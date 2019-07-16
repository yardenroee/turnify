import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from "../actions/song_actions";
import { RECEIVE_ARTIST } from "../actions/artist_actions";
import { merge } from 'lodash';
import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from "../actions/search_actions";
export default (oldState= {}, action) => {
    switch (action.type) {
        case RECEIVE_ALBUM:
            return merge({}, oldState, {[action.album.id] : action.album});
        case RECEIVE_ALL_ALBUMS:
            return merge({}, oldState, action.albums);
        case RECEIVE_ARTIST:
            return merge({}, oldState, action.albums);
        case RECEIVE_PLAYLIST:
            return merge({}, oldState, action.data.albums);
        case RECEIVE_ALL_SEARCHES:
            if(action.albums === undefined) {
                return oldState; 
            }
            return merge({}, oldState, action.albums);
        default:
            return oldState;
    }
};