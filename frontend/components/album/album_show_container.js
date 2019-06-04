import {connect} from 'react-redux';
import {fetchAlbum} from '../../actions/song_actions';
import AlbumShow from './album_show';

const msp = (state, ownProps) => {
    const album = state.entities.albums[parseInt(ownProps.match.params.albumId)];
    const artist = state.entities.artists;
    return {
        album,
        artist
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (albumId)=> dispatch(fetchAlbum(albumId))
    }
}

export default connect(msp,mdp)(AlbumShow);

