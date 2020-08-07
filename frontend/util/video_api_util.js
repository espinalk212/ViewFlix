export const fetchVideos = () => (
  $.ajax({
    url: '/api/videos',
  })
);

export const fetchVideo = videoId => (
  $.ajax({
    url: `/api/videos/${videoId}`
  })
);

export const fetchVideoInfo = query => (
  $.ajax({
    url: '/api/videos',
    data: { query }
  })
);

