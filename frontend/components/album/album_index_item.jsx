import React from 'react';
import { Link } from 'react-router-dom';


const AlbumIndexItem = ({album, artist}) => {
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
                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
            </div>
        </div>
    )
}


export default AlbumIndexItem;