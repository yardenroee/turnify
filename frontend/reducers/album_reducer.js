import { RECEIVE_ALL_SONGS, RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from "../actions/song_actions";
import merge from 'lodash/merge';

export default (oldState= {}, action) => {
    debugger
    switch (action.type) {
        case RECEIVE_ALBUM:
            return {[action.album.id] : action.album}
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        default:
            return oldState;
    }
};