import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({user, logOutUser}) => {
    const ifLoggedIn = () => {
        return (
            <div className='background-overall'>
            <div className="main-content">
                <div className='main-nav'>
                    <div className="left-nav">
                        <Link className="nav-logo" to='/'></Link>
                        <Link className="nav-link-to-home" to='/'>Turnify</Link>
                    </div>
                    <div className="right-nav">
                    <h2>Hello, {user.username}</h2>
                        &nbsp;
                    <button className="logout-button" onClick={logOutUser}>Logout</button>
                    </div>
                </div>
            </div>
            </div>
        )
    };

    const ifLoggedOut = () => {
        return (
            <div className='background-overall'>
            <div className='main-content'>
            <div className='main-nav'>
                <div className="left-nav">
                    <Link className="nav-logo" to='/'></Link>
                    <Link className="nav-link-to-home" to='/'>Turnify</Link>
                </div>
                <div className="right-nav">
                    <Link className='session' to={'/signup'}>Sign Up</Link>
                    &nbsp;
                    <Link className='session' to={'/login'}>Log In</Link>
                </div>
            </div>
            </div>
            </div>
        )
    };
    return user ? ifLoggedIn() : ifLoggedOut();
};

export default Greeting;