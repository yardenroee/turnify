import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { logInUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = ({errors}) => {
    return {
        directionMessage: 'To continue, log in to Turnify.',
        formType: 'LOG IN',
        errors: errors.session,
        navLink: <Link to={'/signup'}>Sign up!</Link>,
        switchMessage: "Not a user?"
    }
};

const mdp = dispatch => {
    return {
        action: (formUser) => dispatch(logInUser(formUser))
    };
};

export default connect(msp,mdp)(SessionForm);