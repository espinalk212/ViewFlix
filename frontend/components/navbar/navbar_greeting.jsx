import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../signupForm/signup_form_container';

class NavbarGreeting extends React.Component {
  constructor(props) {
    super(props)
  }


  
  render() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return(
        <div className='navbar'>
          <Link to="/"><img className='logo' src={window.logo} /></Link>
          <div className='right-nav'>
            <h3 className='greeting'>Welcome {currentUser.username}!</h3>
            <button className='nav-button' value="logout" onClick={logout} >Log Out!</button>
          </div>
        </div>
      );
    } else {
      return(
        <div className='navbar'>
          <Link to="/"><img className='logo' src={window.logo} /></Link>
          <div className="right-nav">
            <Link to='/login'><button className='nav-button'>Sign In</button></Link>
            <Link to='/signup'><button className='nav-button'>Sign Up!</button></Link>
          </div>
        </div>
          );
     }      
  }
}

export default NavbarGreeting;