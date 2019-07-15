import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchArtists, clearSearch } from '../../actions/search_actions';
const msp = state => {
    const artists = Object.values(state.entities.artists);
    const albums = Object.values(state.entities.albums);
    return {
        artists,
        albums
    }
}


const mdp = dispatch => { 
    return {
        searchArtists : queryString => dispatch(searchArtists(queryString)),
        clearSearch: ()=> dispatch(clearSearch())
    }
}

export default connect(msp,mdp)(SearchBar);