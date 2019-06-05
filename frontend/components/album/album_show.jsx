import React from 'react';
import { Link } from 'react-router-dom';
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

    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId);
    }
    componentDidUpdate(prevProps){
        if (prevProps.match.params.albumId != this.props.match.params.albumId){
            this.props.fetchAlbum(this.props.match.params.albumId);

        }
    }
    // componentWillUnmount(){

    // }

    render(){
        let album = {id:'_', photo:'_', title:'_'};
        let artist = {id:'_', name:'_'};
        if (this.props.artist) {artist = this.props.artist;}
        if  (this.props.album) {album = this.props.album;}
        return (
            <>
                <div className="album-show-master">
                    <SidebarContainer />
                    <div className="album-show">
                        <AlbumIndexItem album={album} artist={artist}/>
                    </div>
                <SongContainer  />
                </div>
            </>
        )
    }
}
export default AlbumShow;

// TODO : get those songs really pretty and CISSED THE HOUSE MAW make sure they have all the functionality of spotify