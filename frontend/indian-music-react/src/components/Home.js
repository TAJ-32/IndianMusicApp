import React, { useState, useEffect } from 'react';
import Login from './Login';

function Home ({ LoggedIn, email, setLoggedIn }) {

  const onEmailClick = (LoggedIn) => {
    // You'll update this function later
    setLoggedIn(prevLoggedIn => !prevLoggedIn);
  }

  const onSpotifyClick = () => {
    // You'll update this function later
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        {LoggedIn ? <Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} /> : <h2>Log In!</h2>}
      </div>
      <br />
      <div className={'buttonContainer'}>
        <input 
          className={'inputButton'}
          type="button"
          onClick={onEmailClick}
          value={LoggedIn ? 'Log Out': 'Log in with email'}
        />
        {!LoggedIn && (
          <input 
          className={'inputButton'}
          type="button"
          onClick={onSpotifyClick}
          value={LoggedIn ? 'Log Out': 'Log in with Spotify'}
          />
        )}
      </div>
    </div>
  )
}

export default Home;



/*
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [myData, setMyData] = useState(null);
  const [username, setUsername] = useState(null);
  const [favArtists, setfavArtists] = useState([]);

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

      getSpotifyApi().getMe()
        .then(response => {
          setUsername(response.display_name);
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
*/