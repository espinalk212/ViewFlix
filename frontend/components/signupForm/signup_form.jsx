import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "", 
      errors: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors(this.state.errors);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user); 
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.demoUser();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }


  render() {
    return (
      <div className='auth'>
        <div className='session-form-container '>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <h1 className="form-heading">Sign Up!</h1>
            <div>
              <input className={this.props.errors.length !== 0 ? "input-field-errors" : "input-field"} 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder={'Username'}
              />
              <div className="error-text">{this.props.errors['username'] ? this.props.errors['username'] : ''}</div>
            </div>
            <br/>
            <div>
              <input className={this.props.errors.length !== 0 ? "input-field-errors" : "input-field"} 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder={'Password'}
              />
              <div className="error-text">{this.props.errors['password'] ? this.props.errors['password'] : ''}</div>
            </div>
            <br/>
            <div>
              <input className={this.props.errors.length !== 0 ? "input-field-errors" : "input-field"} 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder={'Email'}
              />
              <div className="error-text">{this.props.errors['email'] ? this.props.errors['email'] : ''}</div>
            </div>
            <div className="form-buttons">
              <input className='submit-button' type="submit" value={this.props.formType} />
              <p className='or'> or </p>
              <button className='demo-login' onClick={this.handleDemoSubmit}>Demo Signin</button>
            </div>
            <div className="account-link">
              <p>Already have an account? <Link className='link' to='/login'>Sign In!</Link></p>
            </div>
          </form>
        </div>
      </div>
      );
    }

}

export default SignupForm;
