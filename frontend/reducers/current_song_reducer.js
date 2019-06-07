import { RECEIVE_PLAYING_SONG, 
        NEXT_PLAYING_SONG, 
        PREV_PLAYING_SONG, 
        TOGGLE_PLAY } from "../actions/current_song_actions";

import {merge} from 'lodash';
import { RECEIVE_SONG } from "../actions/song_actions";



export default (oldState = null, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return action.song;
        case TOGGLE_PLAY:
            return {};
        default:
            return oldState;
    }
};
