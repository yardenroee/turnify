import React from 'react';
import AlbumIndexItem from './album_index_item';
import SidebarContainer from '../sidebar/sidebar_container';
import SongContainer from '../songs/song_container';
class AlbumShow extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    componentWillMount(){
        this.props.fetchAlbum(this.props.match.params.albumId);
    }
    componentDidUpdate(prevProps){
        if (prevProps.match.params.albumId != this.props.match.params.albumId){
            this.props.fetchAlbum(this.props.match.params.albumId);
        }
    }

    render(){
        let album = {id:'_', photo:'_', title:'_'};
        let artist = {id:'_', name:'_'};
        if (this.props.artist) {artist = this.props.artist;}
        if  (this.props.album) {album = this.props.album;}
        return (
                <div className="album-show-master">
                    <SidebarContainer />
                    <div className="album-show">
                        <AlbumIndexItem album={album} artist={artist}/>
                    </div>
                <SongContainer props={this.props} />
                </div>
        )
    }
}
export default AlbumShow;
