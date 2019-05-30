import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

export const signUpUser = (formUser) => dispatch => {
    return SessionApiUtil.signUpUser(formUser).then(user => {
        return dispatch(receiveCurrentUser(user))})
}

export const logInUser = (formUser) => dispatch => {
   return SessionApiUtil.logInUser(formUser).then(user => {
    return dispatch(receiveCurrentUser(user));});
}

export const logOutUser = () => dispatch => (
    SessionApiUtil.logOutUser().then(user => dispatch(logoutCurrentUser()))
);