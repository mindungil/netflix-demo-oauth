// src/components/Auth/HandleAuth.js
import React, { useState } from 'react';
import Signin from './Signin';
import Register from './Register';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './HandleAuth.css'; // 애니메이션 효과를 위한 스타일 포함

function HandleAuth() {
  const [showSignin, setShowSignin] = useState(true);

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
