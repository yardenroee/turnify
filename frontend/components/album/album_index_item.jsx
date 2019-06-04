import React from 'react';
import { Link } from 'react-router-dom';

// TODO : ADD LINK TO ARTIST LINE 17
const AlbumIndexItem = ({album}) => {
    return (
        <div>
            <div>
                <Link to={`/albums/${album.id}`}>
                    <img src={album.photo} />
                </Link>
            </div>

            <div className="album-title-show">
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
            </div>
            <div className="album-artist-show">
                Artist
            </div>
        </div>
    )
}


export default AlbumIndexItem;