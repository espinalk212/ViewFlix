import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import LoginFormContainer from '../components/loginForm/login_form_container';
import SignupFormContainer from '../components/signupForm/signup_form_container';

const App = () => (
  <div className='app'>
    <header>
      <NavbarContainer/>
      <Modal />
    </header>
      <Switch >
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch >
  </div>
);

export default App;