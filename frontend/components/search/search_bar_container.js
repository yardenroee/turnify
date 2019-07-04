import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchArtists, clearSearch } from '../../actions/search_actions';
const msp = state => {
    const search = Object.values(state.ui.search);
    return {
        search
    }
}


const mdp = dispatch => { 
    return {
        searchArtists : queryString => dispatch(searchArtists(queryString)),
        clearSearch: ()=> dispatch(clearSearch())
    }
}

export default connect(msp,mdp)(SearchBar);