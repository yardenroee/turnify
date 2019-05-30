import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const msp = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    };
};

const Auth = ({loggedIn, path, exact, component: Component}) => {
    return <Route path={path} exact={exact} render={ props => {
        return (
            !loggedIn ? (<Component {...props}/>) : (<Redirect to='/'/>) 
        )
    }
}/>
};

export const AuthRoute = withRouter(connect(msp, null)(Auth))