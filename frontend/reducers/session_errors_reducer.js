import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";
import merge from 'lodash/merge';


export default (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return merge({}, oldState, {errors: action.errors});
        case RECEIVE_CURRENT_USER:
            return ({errors: {}});
        default:
            return oldState;
    }
}