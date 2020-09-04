import { RECEIVE_PLAYLIST, CLEAR_PLAYLIST } from "../actions/playlist_actions";

const PlaylistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    // case RECEIVE_PLAYLISTS:
    //   return action.playlist;

    case RECEIVE_PLAYLIST:
      return Object.assign({}, oldState, { [action.playlist.id]: action.playlist });

    case CLEAR_PLAYLIST:
      return {};

    default:
      return oldState;
  }
};

export default PlaylistsReducer;