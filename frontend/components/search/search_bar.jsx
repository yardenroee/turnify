import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import ArtistIndexItem from '../artist/artist_index_item';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.inputRef = React.createRef();

    }

    componentWillMount() {
        this.props.clearSearch();
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
        debugger
        let artistList;
        let albumList;
        const artists = this.props.artists;
        const albums = this.props.albums;
        if (artists.length > 0) {
            artistList = artists.map((artist, index) => {
                return (
                    <li className="individual-artist" key={`${index}`}>
                        <ArtistIndexItem artist={artist} />
                    </li>
                )
            })
        }

        if(albums.length > 0) {
            albumList = albums.map((album,index) => {
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
        }
        if (this.props.artists[0] === undefined && this.state.searchVal === "") {
            var searchRender = <div className="artists-before">
                <h1 className="search-turnify">Search Turnify</h1>
                <p className="search-line">Find your favorite playlists, artists, and albums.</p>
            </div>;
        } else if (this.props.artists[0] === undefined && this.state.searchVal !== "") {
            var searchRender = 
            <div className="search-before">
                <h1>{`No results found for "${this.state.searchVal}"`}</h1>
                    <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
            </div>
        } else {
            var searchRender =
                <div className="search-res">
                    <h1 className="artists-header">
                        Artists
                    </h1>
                    <div className="all-artists-search">
                        {artistList}
                    </div>

                    <h1 className="albums-header">
                        Albums
                    </h1>
                    <div className="all-albums-search">
                        {albumList}
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