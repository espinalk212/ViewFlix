import { RECEIVE_VIDEOS, RECEIVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";

const VideosReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;

    case RECEIVE_VIDEO:
      return Object.assign({}, oldState, { [action.video.id]: action.video });

    case CLEAR_VIDEOS:
      return {};

    default:
      return oldState;
  }
};

export default VideosReducer;