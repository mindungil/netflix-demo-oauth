// src/components/Auth/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
      toast.success('로그인에 성공하였습니다.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      toast.error('로그인에 실패했습니다.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div className="signin-container">
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input type="checkbox" /> Remember me
      </label>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Signin;
