// src/AppRouter.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Popular from './components/Pages/Popular';
import Search from './components/Pages/Search';
import Wishlist from './components/Pages/Wishlist';
import Profile from './components/Pages/Profile';
import Signin from './components/Auth/Signin';
import { HandleAuth } from './components/Auth/HandleAuth';

// ProtectedRoute 컴포넌트 정의
function ProtectedRoute({ children }) {
  const isAuthenticated = JSON.parse(localStorage.getItem('isLoggedIn'));
  return isAuthenticated ? children : <Navigate to="/signin" />;
}

// AppRouter 컴포넌트
function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/popular" element={<ProtectedRoute><Popular /></ProtectedRoute>}/>
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/signin" element={<HandleAuth />}></Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
