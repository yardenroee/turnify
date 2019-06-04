import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import {fetchAllArtists} from '../../actions/artist_actions'
const msp = state => {
    const artists = Object.values(state.entities.artists);
    return {
        artists
    }
}


const mdp = dispatch => {
    return {
        fetchAllArtists : ()=> dispatch(fetchAllArtists())
    }
}

export default connect(msp,mdp)(ArtistIndex);
