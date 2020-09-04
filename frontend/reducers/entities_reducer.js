import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import videosReducer from './video_reducer';
import playlistsReducer from './playlist_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  playlists: playlistsReducer,
});

export default entitiesReducer;