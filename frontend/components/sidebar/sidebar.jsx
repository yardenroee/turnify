import React from 'react';
import { Link } from 'react-router-dom';
 
class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    <Link className="sidebar-logo-img" to='/'><i className="fab fa-spotify"></i></Link>
                    &nbsp;
                    <Link className="sidebar-link-to-home" to='/'>Turnify</Link>
                </div>

                <div className="sidebar-home">
                    <Link to='/'><i className="fas fa-home"></i></Link>
                    &nbsp;
                    <Link className="home-link" to='/artists'>Home</Link>
                </div>

                <div className="sidebar-search">
                    <Link to='/'><i className="fas fa-search"></i></Link>
                    &nbsp;
                    <Link className="search-link" to='/artists'>Search</Link>
                </div>

                <div className="sidebar-playlists">
                    <Link to='/'><i className="fas fa-grip-lines-vertical"></i></Link>
                    &nbsp;
                    <Link className="library-link" to='/'>Your Library</Link>
                </div>
            </div>
        )
    }
}


//TODO : get all the links going and make sure that they redirect to their appropriate place
export default Sidebar;