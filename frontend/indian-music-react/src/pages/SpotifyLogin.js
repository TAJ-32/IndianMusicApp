import React, { useEffect, useState, useCallback } from 'react'; //useEffect
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

  useEffect(() => {
    authenticate(clientId, redirectUri);
  })

  // useEffect(() => {
  //   if (token) {
  //     getSpotifyApi().getUserPlaylists()
  //       .then(response => {
  //         setLoggedIn(true);
  //         setEmail(getSpotifyApi().getUser());
  //         setPlaylists(response.items);
  //       });
  //   }
  // }, [token, LoggedIn, setLoggedIn, setEmail]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/mydata')
      .then(response => {
        setMyData(response.data);
        console.log("Data: ",  myData);
      })
      .catch(error => {
        console.error('Error fetching data from Python backend:', error);
      });
  }, [myData]);



  return (
    <div>
      {/* {onLogin} */}
    </div>
  );
}

export default SpotifyLogin;

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem('token');

  //   if (!token && hash) {
  //     const hashParams = hash.substring(1).split('&').reduce((acc, current) => {
  //       const [key, value] = current.split('=');
  //       acc[key] = value;
  //       return acc;
  //     }, {});
      
  //     token = hashParams.access_token;
  //     window.localStorage.setItem('token', token);
  //     window.location.hash = '';
  //   }
  //   if (token) {
  //     fetchUserData(token);
  //   } else {
  //     authenticate(clientId, redirectUri);
  //   }
  // }, []);

  // const fetchUserData = async (token) => {
  //   try {
  //     const response = await fetch('https://api.spotify.com/v1/me', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json();
  //     window.localStorage.setItem('userData', JSON.stringify(data));
  //     navigate('/', { state: { userData: data } });
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };