import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({artist}) => {
    return (
        <div className="artist-unit">
            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
            &nbsp;
        </div>
    )
}

export default ArtistIndexItem;