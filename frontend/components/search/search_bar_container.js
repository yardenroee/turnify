import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchArtists, clearSearch } from '../../actions/search_actions';
import {fetchSong} from '../../actions/song_actions'
const msp = state => {
    let artists = [];
    let  albums = [];
    let playlists =[];
    if(state.ui.search.artist_ids) {
             artists = state.ui.search.artist_ids.map((artist_id) => {
            return (state.entities.artists[artist_id]);
        });
    }
    if(state.ui.search.album_ids) {
        albums = state.ui.search.album_ids.map((album_id) => {
            return (state.entities.albums[album_id]);
        });
    }

    if(state.ui.search.playlist_ids) {
        playlists = state.ui.search.playlist_ids.map((playlist_id) => {
            return (state.entities.playlists[playlist_id]);
        });
    }
    return {
            artists,
            albums,
            playlists
        };
    };

const mdp = dispatch => { 
    return {
        searchArtists : queryString => dispatch(searchArtists(queryString)),
        clearSearch: ()=> dispatch(clearSearch()),
        fetchSong: (songId)=> dispatch(fetchSong(songId))
    };
};

export default connect(msp,mdp)(SearchBar);