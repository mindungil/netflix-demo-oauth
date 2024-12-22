// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './reducer/store';

function App() {
  return (  
    <>
      <ToastContainer/>
      <Provider store={store}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
      </Provider>
    </>
  );
}

export default App;
