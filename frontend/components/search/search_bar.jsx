import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import ArtistIndexItem from '../artist/artist_index_item';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.inputRef = React.createRef();

    }


    handleSearch(e) {
        if (this.state.searchVal === "") {
            this.props.history.push("/search");
        }
        this.setState({ searchVal: e.target.value });
        if (e.target.value === "") {
            this.props.clearSearch();
        }
        this.props.searchArtists(e.target.value);
    }

    render() {
        let artistList;
        const artists = this.props.search;
        if (artists.length > 0) {
            artistList = artists.map((artist, index) => {
                return (
                    <li className="individual-artist" key={`${index}`}>
                        <ArtistIndexItem artist={artist} />
                    </li>
                )
            })
        }
        if (this.props.search[0] === undefined) {
            var searchRender = <></>;
        } else {
            var searchRender =
                <div className="search-res">
                    <h1 className="artists-header">
                        Artists
                </h1>
                    <div className="all-artists">
                        {artistList}
                    </div>
                </div>
        }
        return (
            <>
                <SidebarContainer />
                <div className="search-master">
                    <div className="search-bar">
                        <input className="search-bar-text" type="text" placeholder="Start typing..." value={this.state.searchVal} onChange={this.handleSearch} />
                    </div>
                    {searchRender}
                </div>
            </>
        )
    }
}


export default SearchBar;