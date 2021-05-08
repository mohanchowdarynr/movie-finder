import React from "react";
import './App.css';
import DownNavbar from './components/DownNavbar';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
        <Navbar />
        <Movies />
    </div>
  );
}

export default App;
