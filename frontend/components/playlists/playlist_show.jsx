import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import SongIndexItem from '../songs/song_index_item';
import PlayBarContainer from '../play_bar/play_bar_container';
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
        debugger
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    componentDidUpdate(){
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.deletePlaylist(this.props.playlist.id)
            .then(() => this.props.history.push("/playlists"));
    }

    playlistSongs() {

        if (this.props.songs.length < 1 || !this.props.playlist.song_ids) { return null; }
        debugger
        return this.props.songs.map((song) => {
            return <SongIndexItem key={song.id} song={song} playlistId={this.props.playlist.id} />
        })
    };

    render() {
        if (!this.props.playlist) return null;
        if(this.props.songs.length === 0){
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
                                        onClick={() => {
                                            this.props.fetchPlayingSong(this.props.songs[0].id)
                                        }}
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
                                        onClick={() => {
                                            this.props.fetchPlayingSong(this.props.songs[0].id)
                                        }}
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
                            <PlayBarContainer currentPlayingSong={this.props.currentPlayingSong} album={this.props.playlist} />
                    </div>
                </div>
            </>
        )
    }
}

export default PlaylistShow;