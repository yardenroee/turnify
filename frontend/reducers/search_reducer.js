import {RECEIVE_ALL_SEARCHES, CLEAR_SEARCH} from '../actions/search_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ALL_SEARCHES:
            if(action.artists === undefined){
                return {};
            } else {
                return action.artists;
            }
            case CLEAR_SEARCH:
            return {};
        default:
            return oldState;
    }
}