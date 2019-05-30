import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_SESSION_ERRORS } from "../actions/session_actions";
import merge from 'lodash/merge';


export default (oldState={errors: []}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return  {errors: action.errors};
        case RECEIVE_CURRENT_USER:
        case CLEAR_SESSION_ERRORS:
            return ({errors: {}});
        default:
            return oldState;
    }
}