import React from 'react';
import SongIndexItem from './song_index_item';
import PlayBarContainer from '../../components/play_bar/play_bar_container';
class Songs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playStatus: "play",
        }
        this.togglePlay = this.togglePlay.bind(this)
    }
    togglePlay() {
            let status = this.state.playStatus;
            let mp3 = document.getElementById(this.props.currentPlayingSong.id);
            if (status === "play" && mp3) {
                status = "pause";
                mp3.play();
            } else if (status === "pause"){
                status = "play";
                mp3.pause();
            }            
            this.setState({ playStatus: status });
    }

    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.albumId != this.props.albumId){
            this.props.fetchSongs(this.props.albumId);
        }
        if(prevProps.currentPlayingSong !== this.props.currentPlayingSong && this.props.currentPlayingSong !== undefined) {
            this.togglePlay();
        }
    }

    render () {
        const { songs } = this.props;
        if(songs.length > 0) {
            const songList = songs.map((song,index) =>{
                return (
                    <li onClick={this.togglePlay} className="individual-song" key={index}>
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
                        <PlayBarContainer currentPlayingSong={this.props.currentPlayingSong} album={this.props.album}/>
                </>
            )
        } else {
            return null;
        }
    }
}

export default Songs;