import {connect} from 'react-redux';
import ArtistShow from './artist_show';
import {fetchArtist} from '../../actions/artist_actions'
import { withRouter } from 'react-router';

const msp = (state, ownProps, history) => {
    debugger
    const artist = state.entities.artists[ownProps.match.params.artistId]
    const albums = Object.values(state.entities.albums).filter(album => {
        debugger
        return album.artist_id === parseInt(ownProps.match.params.artistId)})
    debugger
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

export default withRouter(connect(msp,mdp)(ArtistShow));