import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signUpUser } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    let store;
    if(window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id] : window.currentUser }
            },
            session: {currentUserId: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // TO BE REMOVED AFTER DONE TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signUpUser = signUpUser;
    // TO BE REMOVED AFTER DONE TESTING
    ReactDOM.render(<Root store={store}/>, root);
})