import React from 'react';
import '../styles/App.css';
import { Outlet } from 'react-router-dom'

function App() {

  /*
    The <Outlet /> tag allows for nester rerouting. So because my index route in index.js is Home.js, this will initially render Home.js
    After that, any navigate(path) command that Home.js calls will be rerendered here in App.js using the <Outlet /> tag because
    it handles that nested rerouting from Home.js to Login.js to other pages.
  */
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App;