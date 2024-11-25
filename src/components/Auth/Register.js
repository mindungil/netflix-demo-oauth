// src/components/Auth/Register.js
import React, { useState } from 'react';
import './Auth.css';
import { errorMessage, successMessage } from '../../Util/CustomToast';

function Register({ changeAuth ,state }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      errorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!termsAccepted) {
      errorMessage('약관에 동의해야 합니다.');
      return;
    }
    // 회원가입 성공 처리
    localStorage.setItem('users', JSON.stringify({ email, password }));
    successMessage('회원가입이 성공적으로 완료되었습니다!');

    changeAuth(true);
  };

  const handleAuth = () => {
    changeAuth(!state);
  };

  return (
    <div className="register">
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
      <button onClick={handleAuth}>로그인</button>
    </div>
  );
}

export default Register;
