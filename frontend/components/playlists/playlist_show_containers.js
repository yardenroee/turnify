import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, createPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchPlayingSong } from '../../actions/current_song_actions';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';

const msp = (state, ownProps) => {
    const playlistId = ownProps.match.params.playlistId;
    const playlist = state.entities.playlists[ownProps.match.params.playlistId];
    const songs = playlist ? Object.values(state.entities.songs).filter(song => playlist.song_ids.includes(song.id)) : []
    return {
        playlist: playlist,
        currentUser: state.entities.users[state.session.currentUserId],
        songs: songs
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
        deletePlaylist: (id) => dispatch(deletePlaylist(id)),
        fetchAllSongs: () => dispatch(fetchSongs()),
        fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
        deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
    };
};

export default connect(msp, mdp)(PlaylistShow);