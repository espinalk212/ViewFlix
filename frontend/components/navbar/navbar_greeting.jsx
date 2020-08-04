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
          
          <div className='left-nav'> 
            <Link to="/home"><img className='logo' src={window.logo} /></Link>
            <i className="fas fa-clipboard-list foobar">
              <ul className='dropdown-menu'>
                <li>Playlist 1</li>
                <li>Playlist 2</li>
              </ul>
            </i>
          </div>

            <div className='right-nav'>
              <i className="fas fa-search foobar" >
                <ul className="">

              {/* insert search box here */}
                </ul>
              </i>

              <i className="fab fa-github foobar">
                <ul className="dropdown-menu">
                  <a className="link" href="https://github.com/espinalk212"><li>Github</li></a>
                  <a className="link" href="https://www.linkedin.com/in/kevin-espinal-11238819a/"><li>LinkedIn</li></a>
                </ul>
              </i>

              <i className="fas fa-bell foobar">
                <ul className="dropdown-menu">
                  <li>Movie 1</li>
                  <li>Movie 2</li>
                  <li>Movie 3</li>
                </ul>
              </i>

              <i className="fas fa-user-circle foobar">
                <ul className="dropdown-menu">
                  <li>profile 1</li>
                  <li>profile 2</li>
                  <li>profile 3</li>
                  <li><Link className="link" to="/" onClick={logout}>Log Out!</Link></li>
                </ul>
              </i>

          </div>
        </div>
      );
    } else {
      return(
          <div>
            <div className='navbar-splash'>
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