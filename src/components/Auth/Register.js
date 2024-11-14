// src/components/Auth/Register.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Register({ toggleAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!termsAccepted) {
      toast.error('약관에 동의해야 합니다.');
      return;
    }
    // 회원가입 성공 처리
    localStorage.setItem('registeredUser', JSON.stringify({ email, password }));
    toast.success('회원가입이 성공적으로 완료되었습니다!');
    toggleAuth();
  };

  return (
    <div className="register-container">
      <h2>회원가입</h2>
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
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={() => setTermsAccepted(!termsAccepted)}
        />
        약관에 동의합니다
      </label>
      <button onClick={handleRegister}>회원가입</button>
      <button onClick={toggleAuth}>로그인</button>
    </div>
  );
}

export default Register;
