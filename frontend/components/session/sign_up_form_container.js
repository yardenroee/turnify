import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signUpUser, logInDemoUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
const msp = ({errors}) => {
    return {
        directionMessage: 'Sign up with desired username and password.',
        errors: errors.session.errors,
        formType: 'SIGN UP',
        navLink: <Link to={'/login'}>Log in!</Link>,
        switchMessage: "Already have an account?"
    }
};

const mdp = dispatch => {
    return {
        action: (formUser) => dispatch(signUpUser(formUser)),
        clearErrors : ()=> dispatch(clearErrors()),
        logInDemoUser : () => dispatch(logInDemoUser())
    };
};

export default connect(msp, mdp)(SessionForm);