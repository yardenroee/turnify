import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';
import SidebarContainer from '../../components/sidebar/sidebar_container';
class Album extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;
        if (albums.length > 0) {
            const albumList = albums.map((album,index) => {
                return (
                    <li className="individual-album" key={`${index}`} >
                        <Link to={`/albums/${album.id}`}>
                            <img src={album.photo} />
                        </Link>

                        <div className="album-title">
                            <Link to={`/albums/${album.id}`}>{album.title}</Link>
                        </div>

                        <div className="album-artist">
                            Artist
                        </div>
                    </li>
                )
            })
            return (
                <>
                 <SidebarContainer />
                <div className='all-albums'>
                    <ul>
                        {albumList}
                    </ul>
                </div>
                </>
            
            )
        } else {
            return null;
        }
    }
}
//TODO : get artist into album-artist to have a link to them 
export default Album;