import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import ArtistIndexItem from './artist_index_item';
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
                        <>
                            <li className="individual-artist" key={`${index}`}>
                                <ArtistIndexItem artist={artist} />
                            </li>
                        </>
                    )
                })
            return (
                <>
                    <SidebarContainer />
                    <div className="all-artists">
                        <ul>
                            {artistList}
                        </ul>
                    </div>
                </>
            );
        } else {
            return null;
        }
    }
}

export default ArtistIndex;