import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { signUpUser, logInUser } from './actions/session_actions';
document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    const store = configureStore();

    // TO BE REMOVED AFTER DONE TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signUpUser= signUpUser;
    // TO BE REMOVED AFTER DONE TESTING
    ReactDOM.render(<h1 store={store}>Hello World!</h1>, root)
})