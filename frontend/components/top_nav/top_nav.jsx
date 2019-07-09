import React from 'react'
import {Link} from 'react-router-dom'
const TopNav = () => {
    return(
        <>
        <div className="top-nav-master">
            <ul className="top-nav-links">
                <div className="top-nav-space">
                    <Link className="top-nav-albums" to="/albums">ALBUMS</Link>
                        &nbsp;
                    <Link className="top-nav-artists" to="/artists">ARTISTS</Link>
                        &nbsp;
                    <Link className="top-nav-playlists" to="/playlists">PLAYLISTS</Link>
                        &nbsp;
                </div>
                &nbsp;
            </ul>
        </div>
        </>
    )
}

export default TopNav