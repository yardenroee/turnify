import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import AlbumIndexItem from '../album/album_index_item';
class ArtistShow extends React.Component{
    constructor(props){
        super(props);
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
        let artist = {id:'', name:''};
        let artistHeader;
        if (this.props.artist) {
            artist = this.props.artist;
            artistHeader = {
                backgroundImage: `url(${artist.header})`,
            }
        }

        let albumList = this.props.albums.map((album,index) => {
            return (
                <li key={`album-${index}`} className="artist-show-individual-album">
                    <AlbumIndexItem album={album} artist={artist} />
                </li>
            )
        })
        return(
            <>
                <SidebarContainer />
            <div className="artist-show-master">
                <div className="artist-show-parent">
                    <Link to={`/artists/${artist.id}`}>
                        <div className="artist-show-header" style={artistHeader}></div>
                    </Link>
                        <div className="gradient-layer">
                        <p className="artist-show-name">{artist.name}</p>
                        </div>
                        &nbsp;
                   
                </div>
                <strong className="artist-show-albums-title">Albums</strong>
                <div className="artist-show-all-albums">
                    {albumList}
                </div>
            </div>
            </>
        )
    }
}

export default ArtistShow;
