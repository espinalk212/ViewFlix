import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute } from '../util/route_util';
import Splash from '../components/splash/splash';
import LoginFormContainer from '../components/loginForm/login_form_container';
import SignupFormContainer from '../components/signupForm/signup_form_container';
import VideoIndexContainer from '../components/video/video_index_container';

const App = () => (
  <div className='app' >
    <header >
      <NavbarContainer />
      {/* <Modal /> */}
      {/* <Footer /> */}
    </header >
      <Switch >
        {/* <AuthRoute exact path="/" component={Splash} /> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={VideoIndexContainer} />
    {/* <AuthRoute exact path='/search' component={} />
        <AuthRoute exact path='/videos/${videos.id}' component={} />
        <AuthRoute exact path='/playlists/${playlists.id}/edit' component={} /> */}
      </Switch >
  </div >
);

export default App;