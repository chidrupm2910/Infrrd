import React from 'react';
import './App.css';
import HeaderBar from './containers/HeaderBar/HeaderBar';
import HomePage from './containers/HomePage/HomePage';

function App() {
  return (
    <div className="main-root">
      <HeaderBar />
     <div className="main-content">
       <HomePage />
     </div>
    </div>
  );
}

export default App;
