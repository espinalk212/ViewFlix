export const fetchPlaylist = playlistId =>
  $.ajax({
    url: `/api/users/playlists/${playlistId}`,
  });

// export const updatePlaylist = videoId =>
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/users/playlists/`,
//   });
