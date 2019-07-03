import React from 'react';
import {fetchSong} from '../../actions/song_actions';
import {connect} from 'react-redux';

const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
    };
};

const msp = (state) => {
    const currentPlayingSong = state.ui.currentPlayingSong;
    if( currentPlayingSong !== null) {
        const playing = currentPlayingSong.playing || null;
        return {
            currentPlayingSong,
            playing
        }
    } else {
        return {
            currentPlayingSong
        };
    }
};

class SongIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.currentPlayingSong = this.currentPlayingSong.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
        this.currentSong = null;
    }
    mouseEnter() {
            const { song } = this.props;
            if(this.props.currentPlayingSong.id === song.id && this.props.playing === true) {
                let unit = document.getElementById(`unit-${song.id}`);
                let pauseIcon = document.getElementById(`pause-${song.id}`);
                let playingIcon = document.getElementById(`playing-${song.id}`);
                unit.addEventListener("mouseenter", () => {
                    playingIcon.style.display = "none";
                    pauseIcon.style.display = "inline";
                    return;
                });
            } else {
                let unit = document.getElementById(`unit-${song.id}`);
                let playIcon = document.getElementById(`play-${song.id}`);
                let noteIcon = document.getElementById(`note-${song.id}`);
                unit.addEventListener("mouseenter", () => {
                            noteIcon.style.display = "none";
                            playIcon.style.display = "inline";
                            return;
                    });
            }
    }

    mouseLeave() {
            const { song } = this.props;
        if (this.props.currentPlayingSong.id === song.id && this.props.playing === true) {
            let unit = document.getElementById(`unit-${song.id}`);
            let pauseIcon = document.getElementById(`pause-${song.id}`);
            let playingIcon = document.getElementById(`playing-${song.id}`);
            unit.addEventListener("mouseleave", () => {
                playingIcon.style.display = "inline";
                pauseIcon.style.display = "none";
            });
        } else {
            let unit = document.getElementById(`unit-${song.id}`);
            let playIcon = document.getElementById(`play-${song.id}`);
            let noteIcon = document.getElementById(`note-${song.id}`);
            unit.addEventListener("mouseleave", () => {
                    noteIcon.style.display = "inline";
                    playIcon.style.display = "none";
            });
        }
    }
    onClick() {
            this.currentPlayingSong();
    }

    currentPlayingSong(){
            const { song } = this.props;
            this.props.fetchSong(song.id);
            this.currentSong = song;
    }
    render() {
        const {song} = this.props;
        if(this.props.currentPlayingSong !== null) {
            if(this.props.currentPlayingSong.id === song.id && this.props.playing === true) {
                return (
                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id={`unit-${song.id}`} className="song-unit" onClick={this.onClick}>

                        <div id={`pause-${song.id}`} className="green-pause-icon">
                            <i className="far fa-pause-circle"></i>
                        </div>

                        <div id={`playing-${song.id}`} className="green-playing-icon">
                            <i className="fas fa-volume-up"></i>
                        </div>

                        <p id={song.title} className="green-song-title">{song.title}</p>
                        &nbsp;
        
                <p className="green-song-length">{song.length}</p>
                    </div>
                )
            }
        }
        
        return (
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id={`unit-${song.id}`} className="song-unit" onClick={this.onClick}>
                <div  id={`note-${song.id}`} className="music-note">
                    <i className="fab fa-itunes-note"></i>
                </div>
               
                <div id={`play-${song.id}`} className="play-icon">
                    <i className="fas fa-play"></i>
                </div>
                
                <p id={song.title} className="song-title">{song.title}</p> 
                &nbsp;

                <p className="song-length">{song.length}</p>
            </div>
        )
    }
    
}

export default connect(msp,mdp)(SongIndexItem);