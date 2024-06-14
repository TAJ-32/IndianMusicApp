import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function Home({ LoggedIn, email, username, setLoggedIn, setEmail, setUsername }) {
  const [SpotAuth, setSpotAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      const hash = location.hash;
      const token = new URLSearchParams(hash.substring(1)).get('access_token');
      if (token) {
        localStorage.setItem('access_token', token);
      }
    }, [location]);

  const getProfile = async (accessToken) => {
    const token = accessToken || localStorage.getItem('access_token');

    if (!token) {
      alert("Invalid Sign in. No Spotify Token");
      return;
    }

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      const data = await response.json();
      setUserData(data);
      setLoggedIn(true);
      setEmail(data.email);
      setUsername(data.display_name);
      console.log(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []); 
  

  const onEmailClick = () => {
    if (LoggedIn) {
      // Log out logic
      setLoggedIn(false);
      navigate('/'); // Navigate to Home after logging out
    } else {
      // Navigate to Login page
      navigate('/login');
    }
    // You'll update this function later
  };

  const onSpotifyClick = () => {
    if (LoggedIn) {
      // Log out logic
      setLoggedIn(false);
      navigate('/'); // Navigate to Home after logging out
    } else {
      // Navigate to Login page
      navigate('/login_spotify');
    }
    // You'll update this function later
    setSpotAuth(true);
  }

  const handleUserData = (data) => {
    setUserData(data);
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        {LoggedIn ? <h2>Welcome {username}!</h2> : <h2>Log In!</h2>}
      </div>
      <br />
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onEmailClick}
          value={LoggedIn ? 'Log Out' : 'Log in with email'}
        />
        {!LoggedIn && (
          <input
            className={'inputButton'}
            type="button"
            onClick={onSpotifyClick}
            value={LoggedIn ? 'Log Out' : 'Log in with Spotify'}
          />
        )}
      </div>
    </div>
  );
}
export default Home;