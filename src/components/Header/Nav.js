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
  const [menuOpen, setMenuOpen] = useState(false); // 햄버거 메뉴 상태
  const logState = useSelector((state) => state.boolean.value);
  const dispatch = useDispatch();
  const navLinkRef = useRef(null);
  const navLinkRef2 = useRef(null);

  useEffect(() => {
    let userId = "";
    const localLogCheck = JSON.parse(localStorage.getItem('logged')) | {};
    if (logState || localLogCheck) userId = fetchId();
    setId(userId);
    console.log(userId);
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

  const handleLogout = () => {
    localStorage.setItem('logged', JSON.stringify(false));
    dispatch(setFalse());
    setId("");
    window.location.reload();
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
      <Link to="/" className="nav-link logo">GILFLIX</Link>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>메인</Link>
        <Link to="/popular" className="nav-link" onClick={closeMenu}>대세 콘텐츠</Link>
        <Link to="/search" className="nav-link" onClick={closeMenu}>찾아보기</Link>
        <Link to="/wishlist" className="nav-link" onClick={closeMenu}>위시리스트</Link>
        <Link to="/profile" className="nav-link" onClick={closeMenu}>내 정보</Link>
        <Link
          to="/profile"
          className="nav-link"
          ref={navLinkRef}
          onClick={() => {
            closeMenu();
            changeRandomColor();
          }}
        >
          <i className="fas fa-user" style={{ margin: 3 }}></i>
          {id}
        </Link>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
            handleLogout();
          }}
          ref={navLinkRef2}
          className='nav-link'
        >
          로그아웃
        </a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
      <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>
    </nav>
  );
}

export default Nav;
