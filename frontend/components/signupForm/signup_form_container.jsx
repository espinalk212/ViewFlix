import React from 'react';
import { connect } from 'react-redux';
import { signup, demoUser } from '../../actions/session_actions';
import SignupForm from '../signupForm/signup_form';
import { closeModal } from '../../actions/modal_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Signup'
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  demoUser: () => dispatch(demoUser())
});

export default connect(msp, mdp)(SignupForm);