import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import ArtistIndexItem from './artist_index_item';
import TopNav from '../top_nav/top_nav'
class ArtistIndex extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchAllArtists();
    }

    render() {
        let artistList;
        const { artists } = this.props
        if (artists.length > 0) {
                artistList = artists.map((artist, index) => {
                    return (
                            <li className="individual-artist" key={`${index}`}>
                                <ArtistIndexItem artist={artist} />
                            </li>
                    )
                })
            return (
                <>
                    <SidebarContainer />
                    <div className="artist-index-master">
                        <TopNav />
                        <button onClick={this.props.openModal} className="new-playlist-button">NEW PLAYLIST</button>
                        <div className="all-artists">
                            {artistList}
                        </div>
                    </div>
                </>
            );
        } else {
            return null;
        }
    }
}

export default ArtistIndex;