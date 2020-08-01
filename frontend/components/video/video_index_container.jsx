import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import VideoIndex from '../video/video_index';
import { allVideos, genreVideos } from "../../reducers/selectors"

const msp = state => ({
  // videos: allVideos(state),
  // actionVideos: genreVideos(state, "Action"),
  // comedyVideos: genreVideos(state, "Comedy"),
  // horrorVideos: genreVideos(state, "Horror"),
  // fictionVideos: genreVideos(state, "Fiction"),
  // nonfictionVideos: genreVideos(state, "Non-Fiction"),
  // familyVideos: genreVideos(state, "Family"),

});

const mdp = dispatch => ({
  fetchVideo: video => dispatch(fetchVideo(video)),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(msp, mdp)(VideoIndex);