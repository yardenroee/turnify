import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, createPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { fetchPlayingSong } from '../../actions/current_song_actions';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';

const msp = (state, ownProps) => {
    debugger
    const playlist = state.entities.playlists[ownProps.match.params.playlistId];
    const songs = playlist ? Object.values(state.entities.songs).filter(song => playlist.song_ids.includes(song.id)) : []
    const currentPlayingSong = state.ui.currentPlayingSong || songs[0]; // TODO CHANGE TO FIRST PLAYLIST SONG
    debugger
    return {
        playlist: playlist,
        currentUser: state.entities.users[state.session.currentUserId],
        songs: songs,
        currentPlayingSong
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
        deletePlaylist: (id) => dispatch(deletePlaylist(id)),
        fetchSong: (songId) => dispatch(fetchSong(songId)),
        fetchAllSongs: () => dispatch(fetchSongs()),
        fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
        deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
    };
};

export default connect(msp, mdp)(PlaylistShow);