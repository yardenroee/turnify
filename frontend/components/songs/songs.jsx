import React from 'react';
import SongIndexItem from './song_index_item';
class Songs extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchSongs(this.props.albumId);
    }

    componentDidUpdate(prevProps) {
        debugger
        if(prevProps.album.id != this.props.albumId){
            this.props.fetchSongs(this.props.albumId);
        }
    }

    componentWillUnmount(){
        debugger
    }


    render () {
        const { songs } = this.props;
        debugger
        if(songs.length > 0) {
            const songList = songs.map((song,index) =>{
                return (
                    <li className="individual-song" key={index}>
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