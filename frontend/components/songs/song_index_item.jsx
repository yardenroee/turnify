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
        // this.togglePause = this.togglePause.bind(this)
    }

    mouseEnter() {
            const { song } = this.props;
            if(song) {
                let unit = document.getElementById(`unit-${song.id}`)
                let playIcon = document.getElementById(`play-${song.id}`);
                let noteIcon = document.getElementById(`note-${song.id}`);
                let pauseIcon = document.getElementById(`pause-${song.id}`);
                unit.addEventListener("mouseenter", () => {
                    noteIcon.style.display = "none";
                    playIcon.style.display = "inline"
                })
            }
    }

    mouseLeave() {
            const { song } = this.props;
            if(song) {
                let unit = document.getElementById(`unit-${song.id}`)
                let playIcon = document.getElementById(`play-${song.id}`);
                let noteIcon = document.getElementById(`note-${song.id}`);
                unit.addEventListener("mouseleave", () => {
                    noteIcon.style.display = "inline";
                    playIcon.style.display = "none"
                })
            }
    }

    // togglePause() {
    //     const { song } = this.props;
    //     if (song) {
    //         let unit = document.getElementById(`unit-${song.id}`)
    //         let playIcon = document.getElementById(`play-${song.id}`);
    //         let pauseIcon = document.getElementById(`pause-${song.id}`);
    //         unit.addEventListener("click", () => {
    //             playIcon.style.display = "none";
    //             pauseIcon.style.display = "inline";
    //         })
    //     }
    // }

    currentPlayingSong(){
        const { song } = this.props;
        this.props.fetchSong(song.id);
    }
    render() {
        const {song} = this.props;
        return (
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id={`unit-${song.id}`} className="song-unit" onClick={this.currentPlayingSong}>
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