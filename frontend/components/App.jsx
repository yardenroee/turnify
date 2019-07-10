import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SplashPageContainer from './splash_page/splash_page_container';
import LogInFormContainer from './session/log_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AlbumContainer from './album/album_container';
import AlbumShowContainer from './album/album_show_container';
import ArtistShowContainer from './artist/artist_show_container';
import ArtistIndexContainer from './artist/artist_index_container';
import SearchBarContainer from './search/search_bar_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import PlaylistShowContainer from './playlists/playlist_show_containers';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Switch>
        <ProtectedRoute path='/albums/:albumId' component={AlbumShowContainer} />
        <ProtectedRoute path='/albums' component={AlbumContainer} />
        <ProtectedRoute path='/artists/:artistId' component={ArtistShowContainer} />
        <ProtectedRoute path='/artists' component={ArtistIndexContainer} />
        <ProtectedRoute path='/search' component={SearchBarContainer} />
        <ProtectedRoute path="/playlists/:playlistId" component={PlaylistShowContainer} />
        <ProtectedRoute path="/playlists" component={PlaylistIndexContainer} />

        </Switch>
        <Route path="/" component={Modal} />


        <Route exact path='/' component={SplashPageContainer} />
        
        <Switch>
        <AuthRoute path='/login' component={LogInFormContainer} />
        <AuthRoute path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>
)

export default App
