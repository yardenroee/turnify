import React from 'react';

class AudioPlayer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            shuffled: false,
            replay: false,
        };
        this.audioRef = React.createRef();
        this.handleMusicBarUpdate = this.handleMusicBarUpdate.bind(this);
        this.calculateTimeInSeconds = this.calculateTimeInSeconds.bind(this);
        this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);
        this.setPlaybackTime = this.setPlaybackTime.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.icon = "play";
        this.shuffle = this.shuffle.bind(this)
        this.handlePlay = this.handlePlay.bind(this);
        this.toggleShuffle= this.toggleShuffle.bind(this);
        this.songs = this.props.songs;
    }

    componentDidMount() {
        if (this.props.song.playing) {this.audioRef.current.play();}
        else {this.audioRef.current.pause();}
        this.timeInterval = setInterval(this.handleMusicBarUpdate, 400);
    }

    componentDidUpdate() {
        if (this.props.song.playing) {this.audioRef.current.play();}
        else {this.audioRef.current.pause();}
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    handleMusicBarUpdate() {
        this.setState({currentTime: this.audioRef.current.currentTime});
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
        if(this.state.shuffled === true) {
            this.setState({shuffled : false});
            shuffleButton.style.color = "#b3b3b3";
        } else {
            this.setState({shuffled : true});
            shuffleButton.style.color = '#1db954';

        }
    }

    convertSecondsToMinutes(sec){
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

    shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    prevSong() {
        let songs = this.songs
        const { song } = this.props;
        debugger
        if(this.state.currentTime > 3 && this.props.song.playing) {
            this.props.fetchPrevSong(song.id).then(this.audioRef.current.currentTime = 0);
            return
        }
        for (let i = songs.length-1; i >= 0; i--) {
            if(songs[i].id === song.id) {
                const prevSongId = (i === 0) ? songs[songs.length-1].id : songs[i-1].id;
                this.props.fetchPrevSong(prevSongId);
            }
        }
    }

    nextSong() {
        let songs = this.songs;
        const {song} = this.props;
        for (let i = 0; i < songs.length; i++) {
            if(songs[i].id === song.id) {
                const nextSongId = (i === songs.length -1) ? songs[0].id : songs[i+1].id;
                this.props.fetchNextSong(nextSongId);
            }
        }
    }

    render(){
        this.songs = (this.state.shuffled === true) ? this.shuffle(this.props.songs) : this.props.songs;
        const length = this.calculateTimeInSeconds();
        let { currentTime } = this.state;
      
        if (this.props.playing === true) {
            this.icon = "pause";
        } else {
            this.icon = "play";
        }
        
        return(
            <>
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

                        <button className="playbar-repaet">
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

                    <audio src={this.props.song.mp3} ref={this.audioRef} id={this.props.song.id} onEnded={this.nextSong}></audio>

                </div>
                </div>
            </>
        )}
}

export default AudioPlayer;