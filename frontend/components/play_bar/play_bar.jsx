import React from 'react';
import { Link } from 'react-router-dom';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlay = this.handlePlay.bind(this);
        this.playStatus = this.props.playStatus;
        this.icon = "play";
    }

    componentDidMount() {
        this.props.fetchSong(this.props.currentPlayingSong.id);
    }

    handlePlay() {
        let mp3 = document.getElementById(this.props.currentPlayingSong.id);
        if (mp3.paused) {
            this.icon = "pause";
            this.props.togglePlay(true);
            mp3.play();
        } else {
            this.icon = "play";
            this.props.togglePlay(false);
            mp3.pause();
        }
    }


    render() {
        const { currentPlayingSong } = this.props;
        const { album } = this.props;
        const { artist } = this.props;
        if (this.props.playing === true) {
            this.icon = "pause";
        } else {
            this.icon = "play";
        }
        return (
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

                <div className="playbar-controls">
                    <div className="playbar-buttons">
                        <button className="playbar-shuffle">
                            <i className="fas fa-random"></i>
                        </button>

                        <button className="playbar-previous">
                            <i className="fas fa-step-backward"></i>
                        </button>

                        <button id="play-button" className="playbar-play" onClick={this.handlePlay}>
                            <i className={`far fa-${this.icon}-circle`}></i>
                        </button>

                        <button className="playbar-next">
                            <i className="fas fa-step-forward"></i>
                        </button>

                        <button className="playbar-repaet">
                            <i className="fas fa-redo-alt"></i>
                        </button>
                        <audio className="audio-tag" id={currentPlayingSong.id} src={currentPlayingSong.mp3}></audio>
                    </div>
                </div>

                <div className="volume-control">

                </div>
            </div>
        )
    }
}

export default PlayBar