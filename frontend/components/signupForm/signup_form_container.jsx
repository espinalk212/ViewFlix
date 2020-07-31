import React from 'react';
import { connect } from 'react-redux';
import { signup, demoUser, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';


const msp = state => ({
  errors: state.errors.session,
  formType: 'Signup',
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: errors => dispatch(clearErrors(errors)),
  demoUser: () => dispatch(demoUser()),
});

export default connect(msp, mdp)(SignupForm);