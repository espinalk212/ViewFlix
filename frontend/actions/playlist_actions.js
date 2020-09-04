import * as APIUTIL from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const fetchPlaylist = () => dispatch => (
  APIUTIL.fetchPlaylist()
    .then(playlist => dispatch(receivePlaylist(playlist)))
);

export const clearPlaylist = () => ({
  type: CLEAR_PLAYLIST,

});