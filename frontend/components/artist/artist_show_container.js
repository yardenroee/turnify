import {connect} from 'react-redux';
import ArtistShow from './artist_show';
import {fetchArtist} from '../../actions/artist_actions'
const msp = (state, ownProps) => {
    const artist = state.entities.artists[ownProps.match.params.artistId]
    const albums = Object.values(state.entities.albums)
    
    return {
        artist,
        albums
    }
}

const mdp = dispatch => {
    return {
        fetchArtist : (artist)=> dispatch(fetchArtist(artist))
    }
}

export default connect(msp,mdp)(ArtistShow);