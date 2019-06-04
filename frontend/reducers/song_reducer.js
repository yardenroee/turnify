import { RECEIVE_SONG, RECEIVE_ALL_SONGS, RECEIVE_ALBUM } from "../actions/song_actions";
import merge  from 'lodash/merge'
export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SONGS: 
        return merge({}, oldState, action.songs);
        case RECEIVE_SONG:
            return {[song.id] : action.song};
        default:
            return oldState;
    }
};