import { connect } from 'react-redux';
import PlayBar from './play_bar'
const msp = state => {
    const artist = state.entities.artists
    return {artist}
}
export default connect(msp,null)(PlayBar)