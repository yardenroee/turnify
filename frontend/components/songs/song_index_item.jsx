import React from 'react';
import { fetchSong, togglePlay } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { addPlaylistSong } from '../../actions/playlist_song_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
const mdp = dispatch => {
    return {
        fetchSong: (songId) => dispatch(fetchSong(songId)),
        addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, optionalProps) => dispatch(openModal(modal, optionalProps)),
        togglePlay: (boolean) => dispatch(togglePlay(boolean)),
    };
};

const msp = (state) => {
    const currentPlayingSong = state.ui.currentPlayingSong;
    if (currentPlayingSong !== null) {
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

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.currentPlayingSong = this.currentPlayingSong.bind(this);
        this.mouseEnterSong = this.mouseEnterSong.bind(this);
        this.mouseLeaveSong = this.mouseLeaveSong.bind(this);
        this.onClick = this.onClick.bind(this);
        this.currentSong = null;
        this.state = {
            optionsClicked: false,
            mouseOnSong: false,
            mouseOnDots: false,
        };
        this.flag = false;
        this.handleDropdown = this.handleDropdown.bind(this);
        this.mouseEnterDots = this.mouseEnterDots.bind(this);
        this.mouseLeaveDots = this.mouseLeaveDots.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.playStatus = "play";
    }

    togglePlay() {
        let status = this.playStatus;
        let mp3 = document.getElementById(this.props.currentPlayingSong.id);
        if (status === "play" && mp3) {
            status = "pause";
            this.props.togglePlay(true);
        } else if (status === "pause") {
            status = "play";
            this.props.togglePlay(false);
        }
        this.playStatus = status;
    }

    handleDropdown() {
        if (this.flag) {
            this.setState({ optionsClicked: !this.state.optionsClicked }, () => {
                document.addEventListener("mousedown", this.handleMousedown);
            });
        }
        this.flag = true;
    }

    mouseEnterSong() {
        const { song } = this.props;
        this.setState({mouseOnSong:true});
        if (this.props.currentPlayingSong.id === song.id && this.props.playing === true) {
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

    mouseLeaveSong() {
        const { song } = this.props;
        this.setState({mouseOnSong:false});
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

    mouseEnterDots(){
        const { song } = this.props;
        let dots = document.getElementById(`dots-${song.id}`)
        dots.addEventListener("mouseenter", () => {
            this.setState({ mouseOnSong: false });
            this.setState({ mouseOnDots: true});
        })
    }

    mouseLeaveDots(){
        const { song } = this.props;
        let dots = document.getElementById(`dots-${song.id}`)
        dots.addEventListener("mouseleave", () => {
            this.setState({ mouseOnSong: false });
            this.setState({ mouseOnDots: false }); 
        })
    }

    onClick() {
        if(this.state.mouseOnSong === true) {
            this.currentPlayingSong();
            setTimeout(this.togglePlay, 100);
        }
        if(this.state.mouseOnDots === true) {
            this.handleDropdown();
        }
    }

    currentPlayingSong() {
        const { song } = this.props;
        this.props.fetchSong(song.id);
        this.currentSong = song;
    }
    render() {
        const { song } = this.props;
        const options = this.state.optionsClicked === true ? "active-dropdown" : "";

        if (this.props.currentPlayingSong !== null) {
            if (this.props.currentPlayingSong.id === song.id && this.props.playing === true) {
                return (
                    <div onMouseEnter={this.mouseEnterSong} onMouseLeave={this.mouseLeaveSong} id={`unit-${song.id}`} className="song-unit" onClick={this.onClick}>

                        <div id={`pause-${song.id}`} className="green-pause-icon">
                            <i className="far fa-pause-circle"></i>
                        </div>

                        <div id={`playing-${song.id}`} className="green-playing-icon">
                            <i className="fas fa-volume-up"></i>
                        </div>

                        <p id={song.title} className="green-song-title">{song.title}</p>
                        &nbsp;

                        <button onMouseEnter={this.mouseEnterDots} onMouseLeave={this.mouseLeaveDots} className="drop-down-button" style={{ position: "relative" }}>
                            <i
                                onClick={this.handleDropdown}
                                id={`dots-${song.id}`}
                                className="fas fa-ellipsis-h">
                            </i>

                            <div className={`drop-down-menu ${options} artist-box-position`}>
                                <ul className="drop-down-actions">
                                    <li
                                        className={`add-song-text${this.props.song.id}`}
                                        onClick={
                                            () => {
                                                this.props.openModal("addplaylistsong",
                                                    {
                                                        chosenSong: song
                                                    });
                                                this.setState({ optionsClicked: !this.state.optionsClicked });
                                            }}
                                    >Add to Playlist</li>
                                </ul>
                            </div>
                        </button>

                <p className="green-song-length">{song.length}</p>
                    </div>
                )
            }
        }

        return (
            <div onMouseEnter={this.mouseEnterSong} onMouseLeave={this.mouseLeaveSong} id={`unit-${song.id}`} className="song-unit" onClick={this.onClick}>
                <div className="block1">
                <div id={`note-${song.id}`} className="music-note">
                    <i className="fab fa-itunes-note"></i>
                </div>

                <div id={`play-${song.id}`} className="play-icon">
                    <i className="fas fa-play"></i>
                </div>
                <p id={song.title} className="song-title">{song.title}</p>
                &nbsp;
                </div>
                
                <div className="block2">
                 <button onMouseEnter={this.mouseEnterDots} onMouseLeave={this.mouseLeaveDots} className="drop-down-button" style={{ position: "relative" }}>
                    <i
                        onClick={this.handleDropdown}
                        id={`dots-${song.id}`}
                        className="fas fa-ellipsis-h">
                    </i>

                    <div className={`drop-down-menu ${options} artist-box-position`}>
                        <ul className="drop-down-actions">
                            <li
                                className={`add-song-text${this.props.song.id}`}
                                onClick={
                                    () => {
                                        this.props.openModal("addplaylistsong",
                                            {
                                                chosenSong: song
                                            });
                                        this.setState({ optionsClicked: !this.state.optionsClicked });
                                    }}
                            >Add to Playlist</li>
                        </ul>
                    </div>
                </button>

                <p className="song-length">{song.length}</p>
                </div>
            </div>
        )
    }

}

export default connect(msp, mdp)(SongIndexItem);