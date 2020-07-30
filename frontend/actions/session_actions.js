import * as APIUTIL from '../util/session_api_util'
import { closeModal } from './modal_actions';
//action const
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


//action creators
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});


//??? how do I use this action creator
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk action creators
export const signup = user => dispatch => (
  APIUTIL.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  APIUTIL.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  APIUTIL.logout()
    .then(user => { 
      dispatch (logoutCurrentUser(user))}, 
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const demoUser = () => dispatch => (
  APIUTIL.demoUserLogin()
    .then(user => dispatch(receiveCurrentUser(user)))

);