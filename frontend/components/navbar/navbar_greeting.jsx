import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container'

class NavbarGreeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false,
      clicked: false
    }

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      hovered: !prevState.hovered
    }));
  }

  handleClick() {
    event.stopPropagation();
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  // handleRemoveClick() {
  //   event.stopPropagation();
  //   this.setState(prevState => ({
  //     clicked: !prevState.clicked
  //   }));
  // }




  
  render() {
    const { currentUser, logout } = this.props;
    if (currentUser && !this.props.videoShow) {
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

          <div className='right-nav' > 
            <i className="fas fa-search foobar-search" onClick={this.handleClick} >
              <div className={this.state.clicked ? "search-box-open" : "search-box-closed"}><Link to="/search"><SearchContainer /></Link></div>
              </i>

              <i className="fab fa-github foobar">
                <ul className="dropdown-menu">
                  <a className="link" href="https://github.com/espinalk212"><li>Github</li></a>
                  <a className="link" href="https://www.linkedin.com/in/kevinespinal212/"><li>LinkedIn</li></a>
                  <a className="link" href="https://angel.co/u/kevin-espinal"><li>AngelList</li></a>
                  <a className="link" href="https://espinalk212.github.io/"><li>Portfolio</li></a>
                </ul>
              </i>

              <i className="fas fa-bell foobar">
                <ul className="dropdown-menu">
                  <div className="pop-movies">POPULAR MOVIES</div>
                  <Link className="link" to="videos/4"><li>Extraction</li></Link>
                  <Link className="link" to="videos/6"><li>Spiderman</li></Link>
                  <Link className="link" to="videos/15"><li>The Wrong Missy</li></Link>
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
      } else if (currentUser && this.props.videoShow) {
      return(
        <div className={ this.state.hovered ? "video-nav" : "video-nav-hidden"} onMouseOver={this.handleHover} onMouseLeave={this.handleHover}  >
          <Link to="/home"><button className='nav-button'>Home</button></Link>
        </div>
      )
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