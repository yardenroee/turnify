import React from 'react';

class DurationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTime:0,
        };
        this.audioRef = React.createRef();
        this.handleMusicBarUpdate = this.handleMusicBarUpdate.bind(this);
        this.calculateTimeInSeconds = this.calculateTimeInSeconds.bind(this);
        this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);
        this.setPlaybackTime = this.setPlaybackTime.bind(this)
    }

    componentDidMount() {
        debugger
        if (this.props.song.playing) {
            debugger
            this.audioRef.current.play();
        }
        else {
            this.audioRef.current.pause();
        }
        this.timeInterval = setInterval(this.handleMusicBarUpdate, 400);
    }

    componentDidUpdate() {
        debugger
        if (this.props.song.playing) {
            debugger
            this.audioRef.current.play();
        }
        else {
            this.audioRef.current.pause();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    handleMusicBarUpdate() {
        debugger

        this.setState({
            currentTime: this.audioRef.current.currentTime,
        });
    }
    calculateTimeInSeconds() {
        debugger
        let time = this.props.song.length.split(":");
        let minutes = parseInt(time[0]);
        let seconds = parseInt(time[1]);
        let timeInSeconds = minutes * 60 + seconds;
        debugger
        return timeInSeconds;
    }

    convertSecondsToMinutes(sec){
        let minutes = Math.floor(sec / 60);
        let finalMinutes = minutes < 60 ? minutes : 0;
        const seconds = Math.floor(sec) % 60;
        const finalSeconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;

        if (finalMinutes < 10) finalMinutes = `0${finalMinutes}`;
        else finalMinutes = `${finalMinutes}`;

        let finalTime = finalMinutes + finalSeconds;
        debugger
        return finalTime
    }

    setPlaybackTime(e) {
        debugger
            this.audioRef.current.currentTime = e.target.value;
            this.setState({ currentTime: e.target.value });
    }
    render(){
        const length = this.calculateTimeInSeconds();
        const maxLength = this.convertSecondsToMinutes(length);
        let { currentTime } = this.state;
        debugger
        return(
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

                    <audio src={this.props.song.mp3} ref={this.audioRef} id={this.props.song.id}></audio>

                </div>
        )}
}

export default DurationBar;