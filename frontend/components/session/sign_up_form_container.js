import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = ({errors}) => {
    return {
        directionMessage: 'Sign up with desired username and password.',
        errors: errors.session,
        formType: 'SIGN UP',
        navLink: <Link to={'/login'}>Log in!</Link>,
        switchMessage: "Already have an account?"
    }
};

const mdp = dispatch => {
    return {
        action: (formUser) => dispatch(signUpUser(formUser))
    };
};

export default connect(msp, mdp)(SessionForm);