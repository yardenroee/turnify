import React from 'react';
import {Link} from 'react-router-dom';

class PlayBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playStatus: "play",
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)
    }
    componentDidMount(){
        this.mp3 = document.getElementById(this.props.currentPlayingSong.id)
    }
    handlePlay() {
        let status = this.state.playStatus;
        if (status=== "play"){
            status = "pause";
            this.mp3.play();
            this.setState({ playStatus: status });
        }
        let playButton = document.getElementById("play-button");
        let pauseButton = document.getElementById("pause-button");
        playButton.addEventListener("click", () => {
            playButton.style.display = "none";
            pauseButton.style.display = "inline";
        })
    }

    handlePause() {
        let status = this.state.playStatus;
        if (status === "pause") {
            status = "play";
            this.mp3.pause();
            this.setState({ playStatus: status });
        }
        let playButton = document.getElementById("play-button");
        let pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", () => {
            pauseButton.style.display = "none";
            playButton.style.display = "inline";
        })
    }
    
    render() {
        const {currentPlayingSong} = this.props;
        const {album} = this.props;
        const {artist} = this.props
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
                            <i class="fas fa-random"></i>
                        </button>

                        <button className="playbar-previous">
                            <i class="fas fa-step-backward"></i>
                        </button>

                        <button id="play-button" className="playbar-play" onClick={this.handlePlay}>
                            <i class="far fa-play-circle"></i>
                        </button>

                        <button id="pause-button" className="playbar-pause" onClick={this.handlePause}>
                            <i className="far fa-pause-circle"></i>
                        </button>

                        <button className="playbar-next">
                            <i class="fas fa-step-forward"></i>
                        </button>

                        <button className="playbar-repaet">
                            <i class="fas fa-redo-alt"></i>
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