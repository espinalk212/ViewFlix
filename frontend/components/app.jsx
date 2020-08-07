import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import Splash from '../components/splash/splash';
import LoginFormContainer from '../components/loginForm/login_form_container';
import SignupFormContainer from '../components/signupForm/signup_form_container';
import VideoIndexContainer from './video/video_index_container';
import VideoShowContainer from './video/video_show_container';
import SearchIndexContainer from './search/search_index_container';
import FooterContainer from '../components/footer/footer_container';

const App = () => (
  <div >
    <header >
      <NavbarContainer />
    </header >
      <Switch >
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/home" component={VideoIndexContainer} />
        <ProtectedRoute path="/videos/:videoId" component={VideoShowContainer} />
        <ProtectedRoute path='/search' component={SearchIndexContainer} />
        {/* <ProtectedRoute exact path='/playlists/:playlistId/edit' component={} /> */} */}
      </Switch >
    {/* <FooterContainer /> */}
  </div >
);

export default App;