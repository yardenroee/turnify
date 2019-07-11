import { RECEIVE_ALL_SONGS } from "../actions/song_actions";
import { merge } from 'lodash';
import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";

export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SONGS: 
        return action.songs;
        case RECEIVE_PLAYLIST:
            if(action.data.songs !== undefined){
                return action.data.songs;
            } else {
                return oldState;
            }
        default:
            return oldState;
    }
};
