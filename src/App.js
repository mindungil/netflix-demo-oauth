// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import AppRouter from './AppRouter'
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <AppRouter />
    </Router>
  );
}

export default App;
