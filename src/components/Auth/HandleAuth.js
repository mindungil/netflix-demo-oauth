// src/components/Auth/HandleAuth.js
import React, { useState, useEffect } from 'react';
import Signin from './Signin';
import Register from './Register';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './HandleAuth.css'; // 애니메이션 효과를 위한 스타일 포함
import { useNavigate } from 'react-router-dom';

function HandleAuth() {
  const [showSignin, setShowSignin] = useState(true);
  const navigate = useNavigate();

  // useEffect를 사용해 로그인 상태를 확인하고 리다이렉트
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/'); // 로그인 후 이동할 경로
    }
  }, [navigate]);

  const toggleAuth = () => {
    setShowSignin((prevShowSignin) => !prevShowSignin);
  };

  return (
    <div className="auth-container">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={showSignin ? "signin" : "register"}
          timeout={300}
          classNames="fade"
        >
          <div>
            {showSignin ? (
              <Signin toggleAuth={toggleAuth} />
            ) : (
              <Register toggleAuth={toggleAuth} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default HandleAuth;
