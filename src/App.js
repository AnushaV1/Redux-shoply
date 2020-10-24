import React from 'react';
import './App.css';
import Routes from "./Routes";
import Navbar from "./Navbar";

function App() {
  return (
    <main>
    <Navbar />
    <div className="container">
      <h1 className="mt-3">Welcome to the shopping cart!</h1>
      <Routes />
    </div>
  </main>
  );
}

export default App;
