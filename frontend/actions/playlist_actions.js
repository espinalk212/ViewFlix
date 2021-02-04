import * as APIUTIL from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
export const ADD_VIDEO = 'ADD_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist,
});

export const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST,
});

export const addVideo = videoId => ({
  type: ADD_VIDEO,
  videoId,
});

export const fetchPlaylist = () => dispatch =>
  APIUTIL.fetchPlaylist().then(playlist => dispatch(receivePlaylist(playlist)));

export const addVid = videoId => dispatch =>
  APIUTIL.updatePlaylist(videoId).then(videoId => dispatch(addVideo(videoId)));
