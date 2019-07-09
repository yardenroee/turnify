import Album from './album';
import { connect } from 'react-redux';
import { fetchSongs, fetchAlbums } from '../../actions/song_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const msp = (state) => {
    const albums = Object.values(state.entities.albums);
    return {albums};
}

const mdp = (dispatch) => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchSongs: (albumId)=> dispatch(fetchSongs(albumId)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal('createplaylist')),
    }
}

export default (connect(msp,mdp)(Album));