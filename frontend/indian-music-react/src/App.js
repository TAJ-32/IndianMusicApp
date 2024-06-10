import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authenticate, getHashParams, setAccessToken, getSpotifyApi } from './spotify';

const clientId = '15a7c37cb874416fa0e4a9580f29435e';
const redirectUri = 'http://localhost:3000';

function App() {
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const params = getHashParams();
    const token = params.access_token;
    if (token) {
      setAccessToken(token);
      setToken(token);
    } else {
      authenticate(clientId, redirectUri);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getSpotifyApi().getUserPlaylists()
        .then(response => {
          setPlaylists(response.items);
        });
    }
  }, [token]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/mydata')
      .then(response => {
        setMyData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from Python backend:', error);
      });
  }, []);

  return (
    <div>
      {token ? (
        <div>
          <h1>Your Playlists</h1>
          <ul>
            {playlists.map(playlist => (
              <li key={playlist.id}>{playlist.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading Spotify data...</p>
      )}

      {myData ? (
        <div>
          <h1>My Data</h1>
          <p>{myData.message}</p>
        </div>
      ) : (
        <p>Loading my data...</p>
      )}
    </div>
  );
}

export default App;
