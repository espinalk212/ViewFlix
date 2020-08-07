import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';
import { allVideos, genreVideos } from "../../reducers/selectors"

const msp = state => ({
  videos: allVideos(state.entities),
  actionVideos: genreVideos(state.entities, "Action"),
  comedyVideos: genreVideos(state.entities, "Comedy"),
  horrorVideos: genreVideos(state.entities, "Horror"),
  fictionVideos: genreVideos(state.entities, "Fiction"),
  nonfictionVideos: genreVideos(state.entities, "Non-Fiction"),
  familyVideos: genreVideos(state.entities, "Family"),

});


const mdp = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(msp, mdp)(VideoIndex);