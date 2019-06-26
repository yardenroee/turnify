import React from 'react';
import SongIndexItem from './song_index_item';
import PlayBarContainer from '../../components/play_bar/play_bar_container';
class Songs extends React.Component {
    constructor(props) {
        super(props);
        this.playStatus = "play";
        this.togglePlay = this.togglePlay.bind(this);
        this.fetchCurrentPlayingSong = this.fetchCurrentPlayingSong.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        setTimeout(this.togglePlay, 100);
    }

    togglePlay() {
        let status = this.playStatus;
        let mp3 = document.getElementById(this.props.currentPlayingSong.id);
        if (status === "play" && mp3) {
            status = "pause";
            this.props.togglePlay(true);
            mp3.play();
        } else if (status === "pause") {
            status = "play";
            this.props.togglePlay(false);
            mp3.pause();
        }
        this.playStatus = status;
    }

    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    fetchCurrentPlayingSong() {
        this.props.fetchSong(this.props.currentPlayingSong.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.albumId != this.props.albumId) {
            this.props.fetchSongs(this.props.albumId);
        }
    }

    render() {
        const { songs } = this.props;
        if (songs.length > 0) {
            const songList = songs.map((song, index) => {
                return (
                    <li className="individual-song" key={index} onClick={this.onClick}>
                        <SongIndexItem song={song} />
                    </li>
                )
            })
            return (
                <>
                    <div className="all-songs">
                        <ul>
                            {songList}
                        </ul>
                    </div>
                    <PlayBarContainer playStatus={this.playStatus} currentPlayingSong={this.props.currentPlayingSong} album={this.props.album} />
                </>
            )
        } else {
            return null;
        }
    }
}

export default Songs;