
export const genreVideos = (state, genre) => {
  return Object.values(state.videos).filter(video => {
    return video.genre === genre
  })
};

export const allVideos = state => {
  return Object.values(state.videos)

};
 


