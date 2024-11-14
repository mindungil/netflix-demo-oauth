// components/Profile.js
import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [id, setId] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const fetchLocalStorage = () => {
    try {
      const localData = JSON.parse(localStorage.getItem('registeredUser'));
      return localData;
    } catch (err) {
      console.log("로컬 스토리지 접근 오류: ", err);
    }
  };
  const saveLocalStorage = (newPassword) => {
    try {
      const registeredUser = {
        email: id,
        password: newPassword
      };

      localStorage.setItem('registeredUser', JSON.stringify(registeredUser));
    } catch(err) {
      console.error("비밀번호 저장 실패 : ", err);
      throw err;  
    } finally {
      window.location.reload(true);
    }
  }

  const handlePasswordChange = () => {
    // 비밀번호 변경 로직 구현 (백엔드와 연결 필요)
    const passwordData = fetchLocalStorage().password;

    if(passwordData !== currentPassword) {
      alert("현재 비밀번호가 일치하지 않습니다.");
      return;
    }
    // 새 비밀번호 확인
    if (newPassword !== newPasswordConfirm) {
      alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }
    // 백엔드와 연결하여 비밀번호 변경 요청 보내기
    saveLocalStorage(newPassword);

  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    window.location.reload(); // 예시: 페이지 리로드
  };

  useEffect(() => {
    const idData = fetchLocalStorage();
    setId(idData.email);
  }, []);

  return (
    <div className="profile">
      <h2>내 정보</h2>
      <p>내 아이디:    {id}</p>
      
      <div className="password-change">
        <h3>비밀번호 변경</h3>

        <div className='password'>
          <label>현재 비밀번호:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        
        <div className='password'>
          <label>새 비밀번호:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        
        <div className='password'>
          <label>새 비밀번호 확인:</label>
          <input
            type="password"
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
          />
        </div>

        <button onClick={handlePasswordChange}>변경하기</button>
      </div>
      
      <button className="logout-button" onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Profile;
