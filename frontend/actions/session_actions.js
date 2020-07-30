import * as APIUTIL from '../util/session_api_util'

//action const
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


//action creators
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});


//errors action creators
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
})

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


//demoUser thunk action 
export const demoUser = () => dispatch => (
  APIUTIL.demoUserLogin()
    .then(user => dispatch(receiveCurrentUser(user)))

);