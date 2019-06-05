import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

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

export const clearErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}
export const signUpUser = (formUser) => dispatch => (
    SessionApiUtil.signUpUser(formUser).then(user=> dispatch(receiveCurrentUser(user)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
);

export const logInUser = (formUser) => dispatch => (
    SessionApiUtil.logInUser(formUser).then(user=>dispatch(receiveCurrentUser(user)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
);

export const logOutUser = () => dispatch => (
    SessionApiUtil.logOutUser().then(() => dispatch(logoutCurrentUser()))
);

export const logInDemoUser = () => dispatch => (
    SessionApiUtil.logInDemoUser().then(user => dispatch(receiveCurrentUser(user)))
)