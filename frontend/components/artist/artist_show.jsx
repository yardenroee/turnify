import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import AlbumIndexItem from '../album/album_index_item';
class ArtistShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.artistId != this.props.match.params.artistId){
            this.props.fetchArtist(this.props.artist.id);
        }
    }

    render() {
        let artist = {id:'_', name:'_'};
        let albumList = this.props.albums.map((album,index) => {
            return (
                <li key={`album-${index}`}>
                    <AlbumIndexItem album={album} artist={artist} />
                </li>
            )
        })
        if (this.props.artist) {artist = this.props.artist;}
        return(
            <>
            <div className="artist-show-master">
                <SidebarContainer />
                <div>
                    <Link to={`/artists/${artist.id}`}>
                        <img className="artist-show-header" src={artist.header} />
                    </Link>
                    <h1>{artist.title}</h1>
                </div>
                <ul>
                    {albumList}
                </ul>
            </div>
            </>
        )
    }
}

export default ArtistShow;

//TODO: CSS STYLING V IMPORTANT LOL