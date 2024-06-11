import React, { useEffect, useState } from 'react'; //useEffect
//import TopArtists from './components/TopArtists';
import Home from './Home.js';
import '../styles/App.css';
//import Login from './components/Login.js';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'

//const clientId = '15a7c37cb874416fa0e4a9580f29435e';
//const redirectUri = 'http://localhost:3000';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);

  // useEffect (() => {
  //   setEmail("sartajs2002@gmail.com");
  //   setLoggedIn(true);
  // }, []);

  return (
    <div className="App">
      <Home email={email} LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
    </div>


  )
}

export default App;



/*

      <Login 
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
      />
      <div>

      </div>



        {token ? (
          <div>
            <h1>Hello {username}!</h1>
            <TopArtists accessToken={token} />
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
*/