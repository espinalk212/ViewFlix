import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.demoUser({ username: 'andy', password: '123456' })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }


  render() {
    return (
      <div className='session-form-container'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h1 className="form-heading">Sign Up!</h1>
          <div>
            <input className='input-field'
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder={this.props.errors['username'] ? this.props.errors['username'] : 'Username'}
            />
          </div>
          <br/>
          <div>
            <input className='input-field'
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder={this.props.errors['password'] ? this.props.errors['password'] : 'Password'}
            />
          </div>
          <br/>
          <div>
            <input className='input-field'
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder={this.props.errors['email'] ? this.props.errors['email'] : 'Email'}
            />
          </div>
          <br/>
          <input className='submit-button' type="submit" value={this.props.formType} />
          <p className='or'> or </p>
          <button className='demo-login' onClick={this.handleDemoSubmit}>Demo Signin</button>
        </form>
      </div>
    );
  }

}

export default SignupForm;
