import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
      <div className="h2">This is front end
      </div>
    </>
  );
}

export default App;
