import { RECEIVE_ALL_SONGS } from "../actions/song_actions";
export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SONGS: 
        return action.songs
        default:
            return oldState;
    }
};
