// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HandleAuth from './components/Auth/HandleAuth';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <Router>
      <HandleAuth />
      <AppRouter />
    </Router>
  );
}

export default App;
