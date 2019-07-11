import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import SongIndexItem from '../songs/song_index_item';
class PlaylistShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.playlistSongs = this.playlistSongs.bind(this)
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.deletePlaylist(this.props.playlist.id)
            .then(() => this.props.history.push("/playlists"));
    }

    playlistSongs() {

        if (this.props.songs.length < 1 || !this.props.playlist.song_ids) { return null; }
        return this.props.songs.map((song) => {
            return <SongIndexItem key={song.id} song={song} playlistId={this.props.playlist.id} />
        })
    };

    render() {
        debugger
        if (!this.props.playlist) return null;
        return (
            <>
                <SideBarContainer />
                <div>
                    <div className="playlist-show-page">
                            <div className="playlist-show-left">
                                <img className="playlist-show-images" src={this.props.playlist.photo} />
                                <ul className="playlist-show-info">
                                    <li className="playlist-show-title">{this.props.playlist.title}</li>
                                    <li className="playlist-show-username">{this.props.currentUser.username}</li>
                                    <button
                                        onClick={(() => {
                                            debugger
                                            this.props.fetchSong(this.props.songs[0].id).then(()=> {
                                                setTimeout(this.props.togglePlay(true), 100);
                                            })
                                        }).bind(this)}
                                        className="play-button">Play</button>
                                    <li className="playlist-show-length">{this.props.songs.length} Songs</li>

                                    <form onSubmit={this.handleSubmit}>
                                        < button
                                            className="delete-button">
                                            Delete Playlist</button >
                                    </form>
                                </ul>
                            </div>
                            <div className="playlist-all-songs">
                                {this.playlistSongs()}
                            </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PlaylistShow;