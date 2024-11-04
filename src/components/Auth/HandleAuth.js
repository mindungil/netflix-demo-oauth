// src/components/Auth/HandleAuth.js
import React, { useState } from 'react';
import Signin from './Signin';
import Register from './Register';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './HandleAuth.css';

function HandleAuth() {
  const [showSignin, setShowSignin] = useState(true);

  const toggleAuth = () => setShowSignin(!showSignin);

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
