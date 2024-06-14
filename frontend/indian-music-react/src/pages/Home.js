import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Home({ LoggedIn, email, username, setLoggedIn, setEmail, setUsername }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  /*
  These three code blocks: the useEffect with location as a dependency, the getProfile async function, and the third useEffect are all for
  fetching a User's Spotify data if they logged in using Spotify. More details are given in comments within these blocks
  */
  useEffect(() => {
    /*This activates every time the window's location (the page we are on) changes.  */
      const hash = location.hash; //takes the current URL, which, if we logged in with Spotify, will contain the User's Spotify AccessToken
      const token = new URLSearchParams(hash.substring(1)).get('access_token'); //parses the AccessToken out and puts it in a const
      if (token) {
        localStorage.setItem('access_token', token); //sets the browser's local storage to contain the access_token so we can use it
      }
    }, [location]);
  const getProfile = async (accessToken) => {
    const token = accessToken || localStorage.getItem('access_token'); //token is grabbed from the loca storage we saved it in from the above useEffect

    if (!token) {
      alert("Invalid Sign in. No Spotify Token");
      return;
    }
    try {
      const response = await fetch('https://api.spotify.com/v1/me', { //this is spotify's Endpoint for fetching user data
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      const data = await response.json(); //fetch the data
      //Update state
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
    //call the above function on every render so that we can see if there is new Spotify user info because the user can choose to log in with spotify
    //at any point
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