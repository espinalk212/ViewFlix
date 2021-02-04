export const fetchPlaylist = playlistID =>
  $.ajax({
    url: `/api/users/playlists/${playlistID}`,
  });

export const updatePlaylist = videoId =>
  $.ajax({
    method: 'PATCH',
    url: `/api/users/playlists/`,
  });
