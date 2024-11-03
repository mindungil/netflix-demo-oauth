// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Search from './components/Search';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import Signin from './components/Auth/Signin';
import Register from './components/Auth/Register';

// ProtectedRoute 컴포넌트 정의
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isLoggedIn');
  return isAuthenticated ? children : <Navigate to="/signin" />;
}

// AppRouter 컴포넌트
function AppRouter() {
  // Signin 및 Register 모달을 표시하는 함수
  return (
      <div>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/popular" element={<ProtectedRoute><Popular /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/signin" element={<Signin />} />
        </Routes>

      </div>
  );
}

export default AppRouter;
