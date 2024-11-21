import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { fetchId } from '../../Util/config';
import { successMessage } from '../../Util/CustomToast';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFalse } from '../../reducer/boolean';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [id, setId] = useState();
  const logState = useSelector((state)=>state.boolean.value);
  const dispatch = useDispatch();
  const navLinkRef = useRef(null); // >>>>>> DOM 접근 구현
  const navLinkRef2 = useRef(null);

  
  useEffect(() => {
    let userId = "";
    if(logState) userId = fetchId();
    setId(userId);
  }, [logState]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 스크롤 50px 이상 시 효과
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.setItem('logged', JSON.stringify(false));
    dispatch(setFalse());
    setId("");
    window.location.reload(); // 페이지 리로드
    successMessage("로그아웃 되었습니다.");
  };

  const changeRandomColor = () => {
    const randomColor = generateRandomColor();
    if (navLinkRef.current) {
      navLinkRef.current.style.color = randomColor;
    }
    if (navLinkRef2.current) {
      navLinkRef2.current.style.color = randomColor;
    }
  };

  const generateRandomColor = () => {
    // RGB 색상에서 검정색 계열(0~50)의 값은 제외
    const getRandomValue = () => Math.floor(Math.random() * (255 - 50) + 50);
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-link logo">GILFLIX</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">메인</Link>
        <Link to="/popular" className="nav-link">대세 콘텐츠</Link>
        <Link to="/search" className="nav-link">찾아보기</Link>
        <Link to="/wishlist" className="nav-link">위시리스트</Link>
        <Link to="/profile" className="nav-link">내 정보</Link>
        <Link
          to="/profile"
          className="nav-link2"
          ref={navLinkRef}
          onClick={changeRandomColor}
        >
          <i class="fas fa-user" style={{margin: 3}}></i>
          {id}
        </Link>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // 기본 링크 이동 동작 방지
            handleLogout();
          }}
          ref={navLinkRef2}
          className='nav-link2'
        >
          로그아웃
        </a>
      </div>
    </nav>
  );
}

export default Nav;
