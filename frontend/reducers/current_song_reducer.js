import { RECEIVE_SONG, TOGGLE_PLAY, FETCH_NEXT_SONG, FETCH_PREV_SONG } from "../actions/song_actions";
export default (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return action.song;
        case TOGGLE_PLAY:
            return Object.assign({}, oldState,{playing: action.boolean});
        case FETCH_NEXT_SONG:
            return Object.assign({}, action.song, {playing: true});
        case FETCH_PREV_SONG:
            return Object.assign({}, action.song, { playing: true });
        default:
            return oldState;
    }
};
