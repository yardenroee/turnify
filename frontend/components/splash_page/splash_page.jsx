import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage= ({user, logOutUser}) => {
    const ifLoggedIn = () => {
        return (
            <div className='background-overall'>
            <div className="main-content">
                <div className='main-nav'>
                    <div className="left-nav">
                        <Link className="nav-logo" to='/'><i className="fab fa-spotify"></i></Link>
                        <Link className="nav-link-to-home" to='/'>Turnify</Link>
                    </div>
                    <div className="right-nav">
                    <h2>Hello, {user.username}</h2>
                        &nbsp;
                    <button className="logout-button" onClick={logOutUser}>Logout</button>
                    </div>
                </div>
                <div className="body">
                <p className="direction-message">You're wasting your time here... go listen to some music!</p>
                <Link to="/artists" className="web-player-link">GO TO WEB PLAYER</Link>
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
                     <Link className="nav-logo" to='/'><i className="fab fa-spotify"></i></Link>
                    <Link className="nav-link-to-home" to='/'>Turnify</Link>
                </div>
                <div className="right-nav">
                    <Link className='session' to={'/signup'}>Sign Up</Link>
                    &nbsp;
                    <Link className='session' to={'/login'}>Log In</Link>
                </div>
            </div>

            <div className="home-greeting">
                    <p className="music-for-all">Music for everyone.</p>
                    <p className="millions">Millions of songs no credit card needed.</p>
                    <Link to="/signup" className="get-started">GET STARTED</Link>
            </div>

            </div>
            </div>
        )
    };
    return user ? ifLoggedIn() : ifLoggedOut();
};

export default SplashPage;