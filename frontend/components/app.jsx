import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import Splash from '../components/splash/splash';
import LoginFormContainer from '../components/loginForm/login_form_container';
import SignupFormContainer from '../components/signupForm/signup_form_container';
import VideoIndexContainer from '../components/video/video_index_container';
import FooterContainer from '../components/footer/footer_container';

const App = () => (
  <div className='app' >
    <header >
      <NavbarContainer />
      {/* <Modal /> */}
    </header >
      <Switch >
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/home" component={VideoIndexContainer} />
    {/* <ProtectedRoute exact path='/search' component={} />
        <ProtectedRoute exact path='/videos/${videos.id}' component={} />
        <ProtectedRoute exact path='/playlists/${playlists.id}/edit' component={} /> */}
      </Switch >
    <FooterContainer />
  </div >
);

export default App;