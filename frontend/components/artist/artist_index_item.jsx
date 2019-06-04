import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({artist}) => {
    return (
        <div className="artist-unit">
            <div>
                <Link to={`/artists/${artist.id}`}>
                    <img className="artist-photo" src={artist.photo}/>
                </Link>
                <div className="artist-name">
                    <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </div>
            </div>
            &nbsp;
        </div>
    )
}

export default ArtistIndexItem;