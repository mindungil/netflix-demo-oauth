// components/Login.js
import React, { useState } from 'react';
import './Signin.css';

function Signin() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    console.log(`Logged in as ${username}`);
  };

  return (
    <div className="login">
      <h2>로그인</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Signin;
