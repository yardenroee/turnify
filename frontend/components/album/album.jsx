import React from 'react';
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
                    </li>
                )
            })
            return (
                <>
                 <SidebarContainer />
                <div className="album-index-master">
                    <div>
                        <ul className='all-albums'>
                            {albumList}
                        </ul>
                    </div>
                </div>

                </>
            
            )
        } else {
            return null;
        }
    }
}
export default Album;