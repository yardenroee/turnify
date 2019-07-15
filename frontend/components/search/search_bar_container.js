import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchArtists, clearSearch } from '../../actions/search_actions';
import {fetchSong} from '../../actions/song_actions'
const msp = state => {
    const artists = Object.values(state.entities.artists);
    const albums = Object.values(state.entities.albums);
    const playlists = Object.values(state.entities.playlists);
    if(state.ui.currentPlayingSong) {
        const currentPlayingSong = state.ui.currentPlayingSong;
        return {
            artists,
            albums,
            playlists,
            currentPlayingSong
        }
    } else {
        return {
            artists,
            albums,
            playlists
        }
    }
}


const mdp = dispatch => { 
    return {
        searchArtists : queryString => dispatch(searchArtists(queryString)),
        clearSearch: ()=> dispatch(clearSearch()),
        fetchSong: (songId)=> dispatch(fetchSong(songId))
    }
}

export default connect(msp,mdp)(SearchBar);