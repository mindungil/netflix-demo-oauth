// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (  
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
}

export default App;
