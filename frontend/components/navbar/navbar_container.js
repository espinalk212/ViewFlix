import { connect } from 'react-redux';
import NavbarGreeting from './navbar_greeting';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  const videoId = ownProps.location.pathname.split("/")[2]
  return {
    currentUser: state.entities.users[state.session.id],
    renderButton: ownProps.location.pathname !== "/login",
    videoShow: ownProps.location.pathname === `/videos/${videoId}`

}};


const mdp = () => dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(msp, mdp)(NavbarGreeting));