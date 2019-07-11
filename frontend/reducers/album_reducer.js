import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from "../actions/song_actions";
import { RECEIVE_ARTIST } from "../actions/artist_actions";
import { merge } from 'lodash';
import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";

export default (oldState= {}, action) => {
    debugger
    switch (action.type) {
        case RECEIVE_ALBUM:
            return merge({}, oldState, {[action.album.id] : action.album});
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        case RECEIVE_ARTIST:
            debugger
            return merge({}, oldState, action.albums);
        case RECEIVE_PLAYLIST:
            return merge({}, oldState, action.data.albums);
        default:
            return oldState;
    }
};