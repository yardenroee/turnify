import { connect } from 'react-redux';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = (state) => {

    return {
        playlists: Object.values(state.entities.playlists),
        currentUser: state.entities.users[state.session.currentUserId]
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal('createplaylist')),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);