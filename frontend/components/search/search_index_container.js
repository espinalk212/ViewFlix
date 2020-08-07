import { connect } from 'react-redux';
import Search from '../search/search';
import { clearVideos, fetchVideoInfo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  videos: Object.values(state.entities.videos),
  genre: ownProps.location.pathname.split("/")[2]
});

const mdp = dispatch => ({
  clearVideos: () => dispatch(clearVideos()),
  fetchVideoInfo: query => dispatch(fetchVideoInfo(query))
});

export default withRouter(connect(msp, mdp)(Search));