import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';


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
        <div>
          <div className='navbar'>
            <Link to="/"><img className='logo' src={window.logo} /></Link>
            <div className="right-nav">
              {this.props.renderButton ? 
              <Link to='/login'><button className='nav-button'>Sign In</button></Link> : null
            }
            </div>
          </div>
        </div>
          );
     }      
  }
}

export default NavbarGreeting;