import React from 'react';
import {fetchSong} from '../../actions/song_actions';
import {connect} from 'react-redux';
const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId))
    };
};
class SongIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.currentPlayingSong = this.currentPlayingSong.bind(this)
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
        this.onClick = this.onClick.bind(this)
        this.state = {
            currentSong : null
        }
    }
    mouseEnter() {
            const { song } = this.props;
            let unit = document.getElementById(`unit-${song.id}`)
            let playIcon = document.getElementById(`play-${song.id}`);
            let noteIcon = document.getElementById(`note-${song.id}`);
            let pauseIcon = document.getElementById(`pause-${song.id}`)
            unit.addEventListener("mouseenter", () => {
                if(pauseIcon.style.display === "") {
                        noteIcon.style.display = "none";
                        playIcon.style.display = "inline"
                        return;
                }})
    }

    mouseLeave() {
            const { song } = this.props;
            let unit = document.getElementById(`unit-${song.id}`)
            let playIcon = document.getElementById(`play-${song.id}`);
            let noteIcon = document.getElementById(`note-${song.id}`);
            let pauseIcon = document.getElementById(`pause-${song.id}`)
            unit.addEventListener("mouseleave", () => {
            if (pauseIcon.style.display === "") {
                    noteIcon.style.display = "inline";
                    playIcon.style.display = "none"
            }})
    }
    onClick() {
        this.currentPlayingSong();
    }

    currentPlayingSong(){
        const { song } = this.props;
        this.props.fetchSong(song.id);
        this.setState({currentSong : song})
    }
    render() {
        const {song} = this.props;
        return (
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id={`unit-${song.id}`} className="song-unit" onClick={this.onClick}>
                <div  id={`note-${song.id}`} className="music-note">
                    <i className="fab fa-itunes-note"></i>
                </div>
               
                <div id={`play-${song.id}`} className="play-icon">
                    <i className="fas fa-play"></i>
                </div>
                
                <div id={`pause-${song.id}`} className="pause-icon" onClick={this.currentPlayingSong}>
                    <i className="far fa-pause-circle"></i>
                </div>   

                <p id={song.title} className="song-title">{song.title}</p> 
                &nbsp;

                <p className="song-length">{song.length}</p>
            </div>
        )
    }
    
}

export default connect(null,mdp)(SongIndexItem);