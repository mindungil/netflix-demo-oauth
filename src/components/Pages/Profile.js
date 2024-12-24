// components/Profile.js
import React, { useEffect, useState } from 'react';
import './Profile.css';
import { errorMessage, successMessage } from '../../Util/CustomToast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdCard, faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setFalse } from '../../reducer/boolean';
import { useNavigate } from 'react-router-dom';
import Logout from '../Auth/KakaoLogout';


function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
    dispatch(setFalse());

    await Logout();

    successMessage("로그아웃 되었습니다.");
    dispatch(setFalse());

    navigate('/netflix-demo');
    } catch(err) {
      console.errir('로그아웃 중 에러 -1 :', err);
    }
  };

  const fetchUserName = JSON.parse(localStorage.getItem('user_name'));
  const fetchUserId = JSON.parse(localStorage.getItem('user_id'));

  return (
    <div className="profile">
      <h2><FontAwesomeIcon icon={faIdCard} /></h2>
      <p><FontAwesomeIcon icon={faIdCardClip} />     {fetchUserId}</p>

      <button className="logout-button" onClick={handleLogout}>로그아웃</button>  
      
      <h2>사용자 이름: {fetchUserName}</h2>

    </div>
  );
}

export default Profile;
