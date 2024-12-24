import Home from '../Pages/Home';
import Popular from '../Pages/Popular';
import './kakaoAuth.css';

function KakaoAuth() {
        const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_RESTAPI_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
    console.log(process.env.REACT_APP_REDIRECT_URI);
    const kakaoHandler = async () => {
       window.location.href = authUrl;
    };
    

    return (
        <div className="kakao">
            <button onClick={kakaoHandler}>카카오 로그인</button>
        </div>
    )
};

export default KakaoAuth;