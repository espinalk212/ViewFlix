import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import VideoIndex from '../video/video_index';

const msp = state => ({
  videos: state.videos,
});

const mdp = dispatch => ({
  fetchVideo: video => dispatch(fetchVideo(video)),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(msp, mdp)(VideoIndex);