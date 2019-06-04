import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SplashPageContainer from './splash_page/splash_page_container';
import LogInFormContainer from './session/log_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AlbumContainer from './album/album_container';
import AlbumShowContainer from './album/album_show_container';
const App = () => (
    <div>
        <Switch>
        <ProtectedRoute path='/albums/:albumId' component={AlbumShowContainer} />
        <ProtectedRoute path='/albums' component={AlbumContainer} />
        </Switch>

        <Route exact path='/' component={SplashPageContainer} />
        
        <Switch>
        <AuthRoute path='/login' component={LogInFormContainer} />
        <AuthRoute path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>
)

export default App

//TODO : finish protected routes, comment greeting container back in