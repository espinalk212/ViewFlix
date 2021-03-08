import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import { fetchPlaylist } from '../../actions/playlist_actions';
import Playlist from './playlist';

const msp = (state, ownProps) => ({
  playlistId: ownProps.match.params.playlistId,
  userVideos: Object.values(state.entities.playlists)[playlistId].videos,
  // playlist: state.entities.playlists[0],
});

const mdp = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
});

export default connect(msp, mdp)(Playlist);
