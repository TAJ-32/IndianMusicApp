import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export const getHashParams = () => {
  const hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export const authenticate = (clientId, redirectUri) => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative'
  ];

  const authUrl = 'https://accounts.spotify.com/authorize';
  window.location.href = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

export const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
}

export const getSpotifyApi = () => spotifyApi;
