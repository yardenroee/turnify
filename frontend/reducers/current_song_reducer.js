import { RECEIVE_SONG, TOGGLE_PLAY } from "../actions/song_actions";
export default (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return action.song;
        case TOGGLE_PLAY:
            return Object.assign({}, oldState,{playing: action.boolean});
        default:
            return oldState;
    }
};
