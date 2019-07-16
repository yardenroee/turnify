import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './audio_player_container';
class PlayBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.currentPlayingSong !== undefined) {
            this.props.fetchSong(this.props.currentPlayingSong.id);
        }
    }

    render() {
        const { currentPlayingSong, album, artist } = this.props;
        if(currentPlayingSong !== undefined ){
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
        } else if(currentPlayingSong === null || currentPlayingSong === undefined) {
            return (
                <>
                    <div className="now-playing-bar-null">
                        <div className="playbar-controls-null">
                            <div className="playbar-buttons">
                                <button id="shuffle-button" className="playbar-shuffle">
                                    <i className="fas fa-random"></i>
                                </button>

                                <button className="playbar-previous">
                                    <i className="fas fa-step-backward"></i>
                                </button>

                                <button id="play-button" className="playbar-play" >
                                    <i className={`far fa-play-circle`}></i>
                                </button>

                                <button className="playbar-next">
                                    <i className="fas fa-step-forward"></i>
                                </button>

                                <button id="replay-button" className="playbar-repaet">
                                    <i className="fas fa-redo-alt"></i>
                                </button>

                            </div>
                        </div>

                        <div className="music-time">
                            <p className="music-bar-time-left-null">--:--</p>

                            <div className="progress-bar">
                                <input
                                    type="range"
                                    className="music-progress-bar"
                                    min="0"
                                    max={length}
                                    step="1"
                                     />

                                <div className="outer-music-bar">
                                </div>
                            </div>
                            <p className="music-bar-time-right-null">--:--</p>
                        </div>

                        <div className="volume-bar-null">
                            <button id="volume-button">
                                <i className={`fas fa-volume-down`}></i>
                            </button>
                            <div className="volume-bar-wrapper">
                                <input type="range"
                                    className="volume-progress-bar"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    id="" />
                                <div className="outer-volume-bar">
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default PlayBar