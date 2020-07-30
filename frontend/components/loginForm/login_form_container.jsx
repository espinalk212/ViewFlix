import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, demoUser } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Sign In'
});

const mdp = dispatch => ({
  processForm: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  demoUser: () => dispatch(demoUser()),
});

export default connect(msp, mdp)(LoginForm);