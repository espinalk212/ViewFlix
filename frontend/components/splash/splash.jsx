import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return(
      <div className='splash-signup-container'>
        <div className='splash-signup'>
          <h1>Unlimited Movies!</h1>
          <h3>Sign up for your free trial!</h3>
          <Link to='/signup'><button className='splash-signup-button'>Get Started</button></Link>
        </div>
      </div>
    )
  }
}

export default Splash;

