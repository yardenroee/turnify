import React from 'react';
import SongIndexItem from './song_index_item';
class Songs extends React.Component {
    constructor(props) {
        super(props);
        this.fetchCurrentPlayingSong = this.fetchCurrentPlayingSong.bind(this);
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
                    <li className="individual-song">
                        <SongIndexItem key={song.id} song={song} />
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
                </>
            )
        } else {
            return null;
        }
    }
}

export default Songs;