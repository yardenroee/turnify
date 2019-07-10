import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './audio_player_container';
class PlayBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSong(this.props.currentPlayingSong.id);
    }

    render() {
        const { currentPlayingSong, album, artist } = this.props;
        return (
            <>
                <div className="now-playing-bar">
                    <div className="now-playing">
                        <div>
                            <img className="playbar-cover" src={album.photo} />
                        </div>

                        <div className="song-album-titles">
                            <p className="playbar-song-title">{currentPlayingSong.title}</p>
                            <Link className="artist-link" to={`/artists/${artist.id}`}>{artist.name}</Link>
                        </div>
                    </div>
                        <AudioPlayer song={this.props.currentPlayingSong} />
                </div>
            </>
        )
    }
}

export default PlayBar