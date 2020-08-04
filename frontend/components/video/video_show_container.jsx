import React from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow  from '../video/video_show';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId
 return { 
   video: state.entities.videos[videoId],
  videoId: videoId
}};

const mdp = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId))
});


export default connect(msp, mdp)(VideoShow);