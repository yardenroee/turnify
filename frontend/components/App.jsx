import React from 'react';
import GreetingContainer from './greeting/greeting_component';
import {Route} from 'react-router-dom';
import LogInFormContainer from './session/log_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
const App = () => (
    <div>
        <div className='background-overall'>
            <header>
            </header>
            <Route exact path='/' component={GreetingContainer}/>
            <Route path='/login' component={LogInFormContainer}/>
            <Route path='/signup' component={SignUpFormContainer} />
        </div>
    </div>
)

export default App