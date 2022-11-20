import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Body/>
    </div>
  );
}

export default App;
