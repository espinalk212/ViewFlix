import { 
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER 
} from '../actions/session_actions';


const errorMssgs = {
  ["Username can't be blank"]: 'username',
  ["Email can't be blank"]: 'email',
  ["Password is too short (minimum is 6 characters)"]: 'password' 
};

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  let newState = {};
  switch (action.type) {
    case RECEIVE_ERRORS:
      if (action.errors.responseText === '["Invalid Credentials"]') {
        newState['username'] = 'Invalid username';
        newState['password'] = 'Invalid password';
      } else {
        action.errors.forEach(error => {
          let key = errorMssgs[error];
          newState[key] = error;
        })
      }
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;