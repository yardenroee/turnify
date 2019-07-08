import { connect } from 'react-redux';
import PlaylistSong from './playlist_songs';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';
import { fetchPlayingSong } from '../../actions/current_song_actions';
import { fetchPlaylist } from '../../actions/playlist_actions'

const mdp = (dispatch) => {

    return {
        deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
        fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    }
}

export default connect(null, mdp)(PlaylistSong);