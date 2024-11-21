// src/components/Auth/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { errorMessage, successMessage } from '../../Util/CustomToast';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggle, setTrue } from '../../reducer/boolean';

function Signin({ changeAuth, state }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const isChecked = useSelector((state) => state.boolean.value);
  // console.log(isChecked+ " : is cheked real");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // localStorage에서 등록된 사용자 정보를 가져옴
    const userKey = localStorage.getItem('users') || {};
    let userData = null;
    
    if (userKey) {
      try {
        userData = JSON.parse(userKey);
        // console.log('User data found:', userData); // 디버깅 로그 추가
      } catch (error) {
        console.error('JSON 파싱 오류:', error);
        return;
      }
    } else {
      console.log('No user data found');
    }
  
    if (!userData || email !== userData.email || password !== userData.password) {
      console.log('로그인 실패 조건 실행');
      errorMessage('로그인에 실패하였습니다.');
    } else {
      console.log('로그인 성공 조건 실행');
      if(checkBox) {
        localStorage.setItem('logged', 'true');
      }
      else localStorage.setItem('logged', 'false');

      dispatch(setTrue());
      successMessage("로그인에 성공하였습니다.");
      
      // localStorage에 false 값만 저장, 전역 state 자체는 true 값이어야 함.
      localStorage.setItem('searchlist', JSON.stringify([]));
      navigate('/');
    }
  };

  const handleAuth = () => {
    changeAuth(!state);
  };

  return (
    <div className="signin">
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
        <input type="checkbox" onChange={() => setCheckBox(!checkBox)}/> Remember me
      </label>
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleAuth}>회원가입</button>
    </div>
  );
}

export default Signin;
