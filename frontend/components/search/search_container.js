import { connect } from 'react-redux';
import { fetchVideoInfo, clearVideos } from '../../actions/video_actions';
import SearchForm from '../search/search_form';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  genre: ownProps.location.pathname.split("/")[2]
});

const mdp = dispatch => ({
  fetchVideoInfo: query => dispatch(fetchVideoInfo(query)),
  clearVideos: () => dispatch(clearVideos()),
});


export default withRouter(connect(msp, mdp)(SearchForm));