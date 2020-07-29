import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return(
      <div className='Sign-in-form'>
        <h3 className='form-heading'>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="User-field">
            <input className="input-field" 
              type="text"
              value={this.state.username}
              onChange={this.update('username')} 
            />
          </div>
          <br/>
          <div className="Password-field">
            <input className="input-field"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </div>
          <br/>
          <input className='submit-button' type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
  
}

export default LoginForm;
