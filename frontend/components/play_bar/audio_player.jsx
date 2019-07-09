import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //playback
            currentTime: 0,
            shuffled: false,
            replay: false,
            //playback

            //volume
            volumeBeforeMute: 0.65,
            currentVolume: 0.65,
            muted:false
            //volumr
        };

        //song reference
        this.audioRef = React.createRef();

        //playback controls
        this.handleMusicBarUpdate = this.handleMusicBarUpdate.bind(this);
        this.calculateTimeInSeconds = this.calculateTimeInSeconds.bind(this);
        this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);
        this.setPlaybackTime = this.setPlaybackTime.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.icon = "play";
        this.shuffle = this.shuffle.bind(this)
        this.handlePlay = this.handlePlay.bind(this);
        this.toggleShuffle = this.toggleShuffle.bind(this);
        this.toggleReplay = this.toggleReplay.bind(this);

        // volume controls
        this.setVolume = this.setVolume.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.songs = this.props.songs;
    }
    //life cycle
    componentDidMount() {
        if (this.props.song.playing) { this.audioRef.current.play(); }
        else { this.audioRef.current.pause(); }
        this.timeInterval = setInterval(this.handleMusicBarUpdate, 400);
    }

    componentDidUpdate() {
        if (this.props.song.playing) { this.audioRef.current.play(); }
        else { this.audioRef.current.pause(); }
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }
    //life cycle

    //playback controls
    handleMusicBarUpdate() {
        this.setState({ currentTime: this.audioRef.current.currentTime });
    }

    calculateTimeInSeconds() {
        let time = this.props.song.length.split(":");
        let minutes = parseInt(time[0]);
        let seconds = parseInt(time[1]);
        let timeInSeconds = minutes * 60 + seconds;
        return timeInSeconds;
    }

    toggleShuffle() {
        let shuffleButton = document.getElementById("shuffle-button");
        if (this.state.shuffled === true) {
            this.setState({ shuffled: false });
            shuffleButton.style.color = "#b3b3b3";
        } else {
            this.setState({ shuffled: true });
            shuffleButton.style.color = '#1db954';

        }
    }

    toggleReplay() {
        let replayButton = document.getElementById("replay-button");
        if (this.state.replay === true) {
            this.setState({ replay: false });
            replayButton.style.color = "#b3b3b3";
        } else {
            this.setState({ replay: true });
            replayButton.style.color = '#1db954';

        }
    }
    convertSecondsToMinutes(sec) {
        let minutes = Math.floor(sec / 60);
        let finalMinutes = minutes < 60 ? minutes : 0;
        const seconds = Math.floor(sec) % 60;
        const finalSeconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;

        if (finalMinutes < 10) finalMinutes = `0${finalMinutes}`;
        else finalMinutes = `${finalMinutes}`;

        let finalTime = finalMinutes + finalSeconds;
        return finalTime;
    }

    setPlaybackTime(e) {
        this.audioRef.current.currentTime = e.target.value;
        this.setState({ currentTime: e.target.value });
    }

    handlePlay() {
        let mp3 = document.getElementById(this.props.song.id);
        if (mp3.paused) {
            this.icon = "pause";
            this.props.togglePlay(true);
        } else {
            this.icon = "play";
            this.props.togglePlay(false);
        }
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    prevSong() {
        let songs = this.songs
        const { song } = this.props;
        if (this.state.currentTime > 3 && this.props.song.playing) {
            this.props.fetchPrevSong(song.id).then(this.audioRef.current.currentTime = 0);
            return;
        }
        for (let i = songs.length - 1; i >= 0; i--) {
            if (songs[i].id === song.id) {
                const prevSongId = (i === 0) ? songs[songs.length - 1].id : songs[i - 1].id;
                this.props.fetchPrevSong(prevSongId);
            }
        }
    }

    nextSong() {
        let songs = this.songs;
        const { song } = this.props;
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id === song.id) {
                const nextSongId = (i === songs.length - 1) ? songs[0].id : songs[i + 1].id;
                this.props.fetchNextSong(nextSongId);
            }
        }
    }
    //playback controls


    //volume controls
    setVolume(e) {
        this.audioRef.current.volume = e.target.value;
        this.setState({ currentVolume: e.target.value })
        this.setState({ volumeBeforeMute: e.target.value })
    }

    toggleMute(){
        debugger
        if(this.state.muted === false) {
            this.setState({currentVolume : 0});
            this.setState({muted : true});
            this.audioRef.current.volume = 0;
        } else {
            this.setState({ currentVolume: this.state.volumeBeforeMute });
            this.setState({ muted: false });
            this.audioRef.current.volume = this.state.volumeBeforeMute;
        }
        debugger
    }
    //volume controls
    render() {
        this.songs = (this.state.shuffled === true) ? this.shuffle(this.props.songs) : this.props.songs;
        const length = this.calculateTimeInSeconds();
        let { currentTime, currentVolume } = this.state;
        (this.props.playing === true) ? this.icon = "pause" : this.icon = "play";
        const replay = (this.state.replay === false) ? this.nextSong : this.prevSong;
        let volumeIcon;
        if(currentVolume === 0) {
            volumeIcon = "mute";
        } else if (currentVolume >= 0.65) {
            volumeIcon = "up";
        } else if (currentVolume >= 0.05 && currentVolume < 0.65){
            volumeIcon = "down";
        } else if(currentVolume < 0.05){
            volumeIcon = "off";
        }
        return (
            <>
                <audio src={this.props.song.mp3} ref={this.audioRef} id={this.props.song.id} onEnded={replay}></audio>
                <div className="playbar-controls">
                    <div className="playbar-buttons">
                        <button id="shuffle-button" className="playbar-shuffle" onClick={this.toggleShuffle}>
                            <i className="fas fa-random"></i>
                        </button>

                        <button className="playbar-previous" onClick={this.prevSong}>
                            <i className="fas fa-step-backward"></i>
                        </button>

                        <button id="play-button" className="playbar-play" onClick={this.handlePlay}>
                            <i className={`far fa-${this.icon}-circle`}></i>
                        </button>

                        <button className="playbar-next" onClick={this.nextSong}>
                            <i className="fas fa-step-forward"></i>
                        </button>

                        <button id="replay-button" className="playbar-repaet" onClick={this.toggleReplay}>
                            <i className="fas fa-redo-alt"></i>
                        </button>
                    </div>

                    <div className="music-time">
                        <p className="music-bar-time-left">{this.convertSecondsToMinutes(this.state.currentTime)}</p>

                        <div className="progress-bar">
                            <input
                                type="range"
                                className="music-progress-bar"
                                min="0"
                                max={length}
                                step="1"
                                onChange={this.setPlaybackTime} />

                            <div className="outer-music-bar">
                                <div className="inner-music-bar" style={{ width: `${100 * (currentTime / length) || 0}%` }}></div>
                                <div className="progress-ball" style={{ marginLeft: `${100 * (currentTime / length) || 0}%` }}></div>
                            </div>
                        </div>
                        <p className="music-bar-time-right">{this.props.song.length}</p>
                    </div>

                </div>
                <div className="volume-bar">
                    <button id="volume-button" onClick={this.toggleMute}>
                        <i className={`fas fa-volume-${volumeIcon}`}></i>
                    </button>
                        <div className="volume-bar-wrapper">
                        <input type="range"
                            className="volume-progress-bar"
                            min="0"
                            max="1"
                            step="0.01"
                            onChange={this.setVolume}
                            id="" />
                    <div className="outer-volume-bar">
                            <div className="inner-volume-bar" style={{ width: `${100 * (currentVolume / 1)}%` }}></div>
                            <div className="progress-ball-volume" style={{ marginLeft: `${100 * (currentVolume / 1)}%` }}></div>
                    </div>
                        </div>
                </div>
            </>
        )
    }
}

export default AudioPlayer;