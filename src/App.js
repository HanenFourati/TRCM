import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routeurcrtm  from './Components/Routeurcrtm.js'
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routeurcrtm />
      </BrowserRouter>
    </div>
  );
}

export default App
