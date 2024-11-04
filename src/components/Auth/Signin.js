// src/components/Auth/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { toast } from 'react-toastify';

function Signin({ toggleAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 간단한 localStorage 기반 인증 로직
    if (email === 'test@example.com' && password === 'password123') {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success('로그인에 성공하였습니다.');
      navigate('/');
    } else {
      toast.error('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인하세요.');
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
      <button onClick={toggleAuth}>회원가입</button>
    </div>
  );
}

export default Signin;
