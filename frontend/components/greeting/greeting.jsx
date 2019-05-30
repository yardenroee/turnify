import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({user, logOutUser}) => {
    const ifLoggedIn = () => {
        return (
            <div className="main-content">
                <div className='main-nav'>
                    <h2>Hello, {user.username}</h2>
                <button className="logout-button" onClick={logOutUser}>Logout</button>
                </div>
            </div>
        )
    };

    const ifLoggedOut = () => {
        return (
            <div className='main-content'>
            <div className='main-nav'>
                <Link to={'/signup'}>Sign Up</Link>
                &nbsp;
                <Link to={'/login'}>Log In</Link>
            </div>
            </div>
        )
    };
    return user ? ifLoggedIn() : ifLoggedOut();
};

export default Greeting;