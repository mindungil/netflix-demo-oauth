// src/AppRouter.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Popular from './components/Pages/Popular';
import Search from './components/Pages/Search';
import Wishlist from './components/Pages/Wishlist';
import Profile from './components/Pages/Profile';
import { HandleAuth } from './components/Auth/HandleAuth';
import { useSelector } from 'react-redux';

// ProtectedRoute 컴포넌트 정의
function ProtectedRoute({ children }) {
  const checked = useSelector((state) => state.boolean.value);
  console.log(checked + " : is now state");
  const isAuthenticated = JSON.parse(localStorage.getItem('logged'));
  return (isAuthenticated || checked) ? children : <Navigate to="/netflix-demo/signin" />;
}

// AppRouter 컴포넌트
function AppRouter() {
  return (
    <div>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/netflix-demo" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/netflix-demo/popular" element={<ProtectedRoute><Popular /></ProtectedRoute>}/>
        <Route path="/netflix-demo/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/netflix-demo/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/netflix-demo/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/netflix-demo/signin" element={<HandleAuth />}></Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
