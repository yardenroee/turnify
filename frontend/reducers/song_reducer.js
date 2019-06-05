import { RECEIVE_SONG, RECEIVE_ALL_SONGS } from "../actions/song_actions";
export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SONGS: 
        return action.songs
        case RECEIVE_SONG:
            return {[song.id] : action.song};
        default:
            return oldState;
    }
};
