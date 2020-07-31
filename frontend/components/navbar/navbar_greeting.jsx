import React, { useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';


class NavbarGreeting extends React.Component {
  constructor(props) {
    super(props)
  }

  NavItem(props) {
    const { icon } = props
    const [ open, setOpen ] = useState(false);
    return(
        <div className="profile-dropdown dropdown">
          <i className={`${icon} foobar`} onClick={() => setOpen(!open)}>
            {
              open && props.children
            }
          </i>
        </div>
    );
  }

  
  render() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return(
        <div className='navbar'>
          <Link to="/"><img className='logo' src={window.logo} /></Link>
              < this.NavItem icon={'fas fa-clipboard-list'} >
                <ul>
                  <Link><li>Kevin</li></Link>
                  <Link><li>Kevin</li></Link>
                  <Link><li>Sign Out</li></Link>
                </ul>
              </this.NavItem>
          <div className='right-nav'>
            <this.NavItem icon={'fas fa-search'} >
              <ul>
                <Link><li>Kevin</li></Link>
                <Link><li>Kevin</li></Link>
                <Link><li>Sign Out</li></Link>
                </ul>
              </this.NavItem>
            <this.NavItem icon={'fab fa-github'} >
                  <ul>
                    <Link><li>Kevin</li></Link>
                    <Link><li>Kevin</li></Link>
                    <Link><li>Sign Out</li></Link>
                  </ul>
            </this.NavItem>
            < this.NavItem icon={'fas fa-bell'} >
                  <ul>
                    <Link><li>Kevin</li></Link>
                    <Link><li>Kevin</li></Link>
                    <Link><li>Sign Out</li></Link>
                  </ul>
            </this.NavItem>
            <this.NavItem icon={'fas fa-user-circle'} >
              <ul>
                <Link><li>Kevin</li></Link>
                <Link><li>Kevin</li></Link>
                <button className='nav-button' value="logout" onClick={logout} >Log Out!</button>
              </ul>
            </this.NavItem>
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