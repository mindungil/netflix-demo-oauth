import React from 'react';
import './kakaoAuth.css';

export default function KakaoAuth() {
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_RESTAPI_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

    const kakaoHandler = async () => {
        window.location.href = authUrl;
    };

    return (
        <div className="kakao-container">
            <button className="kakao-button" onClick={kakaoHandler}>카카오 로그인</button>
            <p className="kakao-description">위 버튼을 누를 시 카카오 계정으로 로그인할 수 있습니다.</p>
        </div>
    );
};
