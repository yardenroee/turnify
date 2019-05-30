import { connect } from 'react-redux';
import Greeting from './greeting';
import {logOutUser} from '../../actions/session_actions';

const msp = ({session, entities: {users}}) => {
    const user = users[session.currentUserId];
    return {user};
}

const mdp = dispatch => {
    return {
        logOutUser: () => dispatch(logOutUser())
    };
};

export default connect(msp,mdp)(Greeting);