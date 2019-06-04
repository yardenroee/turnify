import { connect } from 'react-redux';
import { logOutUser } from '../../actions/session_actions';
import Sidebar from './sidebar';

const msp = state => {
    return {
        currentUser : state.entities.users[state.session.currentUserId]
    }
}

const mdp = dispatch => {

    return {
        logOutUser : ()=> {
            dispatch(logOutUser())
        }
    } 
}
export default connect(msp,mdp)(Sidebar);