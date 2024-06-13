import React, { useEffect, useState } from 'react'; //useEffect
//import TopArtists from './components/TopArtists';
import Home from './Home.js';
import '../styles/App.css';
//import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom'

//const clientId = '15a7c37cb874416fa0e4a9580f29435e';
//const redirectUri = 'http://localhost:3000';

function App() {

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App;