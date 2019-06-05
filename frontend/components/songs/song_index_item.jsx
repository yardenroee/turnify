import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = ({song}) => {
    return (
        <div className="song-unit">
            <div className="music-note"><i className="fab fa-itunes-note"></i></div>
            <div className="play-icon"><i className="fas fa-play"></i></div>
            <Link className="song-title" to={`/songs/${song.id}`}>{song.title}</Link> 
            &nbsp;
            <p className="song-length">{song.length}</p>
        </div>
    )
}

export default SongIndexItem;