import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Outlet, useNavigate } from 'react-router-dom';

function Home({ LoggedIn, email, setLoggedIn }) {
  const navigate = useNavigate();

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
    // You'll update this function later
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        {LoggedIn ? <h2>HIIII</h2> : <h2>Log In!</h2>}
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