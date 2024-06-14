import React, { useEffect, useState } from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../src/pages/App.js"
import Home from "../src/pages/Home.js"
import Login from "../src/pages/Login.js"
import SpotifyLogin from "../src/pages/SpotifyLogin.js"

function MyApp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home LoggedIn={LoggedIn} email={email} username={username} setLoggedIn={setLoggedIn} setEmail={setEmail} setUsername={setUsername}/>} />
          <Route path="login" element={<Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail} username={username} setUsername={setUsername}/>} />
          <Route path="login_spotify" element={<SpotifyLogin LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail}/>} />
        </Route>
      </Routes>
    </Router>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
