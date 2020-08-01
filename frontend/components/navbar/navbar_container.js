import { connect } from 'react-redux';
import NavbarGreeting from './navbar_greeting';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    renderButton: ownProps.location.pathname !== "/login",

});


const mdp = () => dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(msp, mdp)(NavbarGreeting));