export const fetchPlaylist = playlist => (
  $.ajax({
    url: `/api/users/playlists/${playlist.Id}`,
  })
);