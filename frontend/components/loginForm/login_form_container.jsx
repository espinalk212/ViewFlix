import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, demoUser, clearErrors } from '../../actions/session_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Sign In'
});

const mdp = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: errors => dispatch(clearErrors(errors)),
  demoUser: () => dispatch(demoUser()),
});

export default connect(msp, mdp)(LoginForm);