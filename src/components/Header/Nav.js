import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import { errorMessage, successMessage } from '../../Util/CustomToast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFalse, setTrue } from '../../reducer/boolean';
import Logout from '../Auth/KakaoLogout';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 햄버거 메뉴 상태
  const [name, setName] = useState("");
  const logState = useSelector((state) => state.boolean.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navLinkRef = useRef(null);
  const navLinkRef2 = useRef(null);

  useEffect(() => {
    const localLogCheck = JSON.parse(localStorage.getItem('logged')) | {};
    const userName = JSON.parse(localStorage.getItem('user_name'));
    if(userName && localLogCheck) {
      setName(userName);
    } else if(!localLogCheck) setName("");

    if (localLogCheck) {
      console.log('state: ', logState);
      console.log('localState: ', localLogCheck)

      dispatch(setTrue());
    } else {
      dispatch(setFalse());
      console.log('로그인 상태가 아닙니다.');
    }
  }, [logState]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    const getRandomValue = () => Math.floor(Math.random() * (255 - 50) + 50);
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();
    return `rgb(${r}, ${g}, ${b})`;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/netflix-demo" className="nav-link logo">GILFLIX</Link>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/netflix-demo" className="nav-link" onClick={closeMenu}>메인</Link>
        <Link to="/netflix-demo/popular" className="nav-link" onClick={closeMenu}>대세 콘텐츠</Link>
        <Link to="/netflix-demo/search" className="nav-link" onClick={closeMenu}>찾아보기</Link>
        <Link to="/netflix-demo/wishlist" className="nav-link" onClick={closeMenu}>위시리스트</Link>
        <Link to="/netflix-demo/profile" className="nav-link" onClick={closeMenu}>내 정보</Link>
        <Link
          to="/netflix-demo/profile"
          className="nav-link"
          ref={navLinkRef}
          onClick={() => {
            closeMenu();
            changeRandomColor();
          }}
        >
          <FontAwesomeIcon icon={faIdBadge} style={{marginRight: 3}} />
          {name}
        </Link>
        {logState ? 
        <a
          href="/netflix-demo"
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
            logState ? handleLogout() : errorMessage("로그인 상태가 아닙니다.");
          }}
          ref={navLinkRef2}
          className='nav-link'
        >
          로그아웃
        </a> : 
        <a
          href="/netflix-demo/signin"
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
          }}
          ref={navLinkRef2}
          className='nav-link'
        >
          
        </a>
        }
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}

export default Nav;
