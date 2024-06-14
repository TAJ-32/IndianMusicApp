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
    authenticate(clientId, redirectUri); //call Spotify's OAuth console which will then redirect us to localhost:3000 with the accesstoken in the URL. Home.js handles everything from there
  })


  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/mydata')
  //     .then(response => {
  //       setMyData(response.data);
  //       console.log("Data: ",  myData);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data from Python backend:', error);
  //     });
  // }, [myData]);



  return (
    <div>
      {/* {onLogin} */}
    </div>
  );
}

export default SpotifyLogin;