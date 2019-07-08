import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
class PlaylistIndex extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.currentUser = this.props.currentUser;
        debugger
        this.state = {
            loading: true,
        }
        debugger
    }

    componentDidMount() {
        debugger
        this.props.fetchPlaylists();
        debugger
    }

    render() {
        if (this.state.loading) {
            <div className="loader"></div>
        }

        let playlists;

        if (this.props.playlists) {

            playlists = this.props.playlists.map(playlist => {

                if (playlist.user_id === this.currentUser.id) {
                    if (!playlist.photo) {
                        playlist.photo = window.brentURL2;
                    }

                    return (
                        <li className="playlist-index-box" key={playlist.id}>
                            <Link to={`/playlists/${playlist.id}`}>
                                <img className="playlist-index-images" src={playlist.photo} />
                            </Link>

                            <Link
                                to={`/playlists/${playlist.id}`}>
                                <p className="playlist-title">{playlist.title}</p>
                            </Link>
                        </li>
                    )
                }
            });
        }

        return (
            <>
            <div className="playlist-page">
            <SidebarContainer />
                <button onClick={this.props.openModal} className="new-playlist-button">NEW PLAYLISTNEW PLAYLISTNEW PLAYLISTNEW PLAYLIST</button>
                <ul className="all-playlist-boxes">
                    {playlists}
                </ul>
            </div>
            </>
        );
    }
}


export default PlaylistIndex;