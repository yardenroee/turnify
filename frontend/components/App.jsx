import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_component';
import LogInFormContainer from './session/log_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import { AuthRoute } from '../util/route_util';
const App = () => (
    <div>
            <header>
            </header>
            <Route exact path='/' component={GreetingContainer}/>
            <AuthRoute exact path='/login' component={LogInFormContainer}/>
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    </div>
)

export default App