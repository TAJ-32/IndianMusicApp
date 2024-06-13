import React, { useEffect, useState } from 'react'; //useEffect
import axios from 'axios';
import { authenticate, getHashParams, setAccessToken, getSpotifyApi } from '../spotify.js';
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom'

const clientId = '15a7c37cb874416fa0e4a9580f29435e';
const redirectUri = 'http://localhost:3000';

function SpotifyLogin(LoggedIn, setLoggedIn, email, setEmail) {
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [myData, setMyData] = useState(null);

  const navigate = useNavigate();

  const onLogin = () => {
    if (LoggedIn) {
      // Log out logic
      navigate('/'); // Navigate to Home after logging out
    } else {
      // Navigate to Login page
      navigate('/login');
    }
    // You'll update this function later
  };

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
          setLoggedIn(true);
          setEmail(getSpotifyApi().getUser());
          setPlaylists(response.items);
        });
    }
  }, [token, LoggedIn, setLoggedIn, setEmail]);

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
      {onLogin}
    </div>
  );
}

export default SpotifyLogin;