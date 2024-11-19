import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 스크롤 50px 이상 시 효과 >> 스크롤 다운 시 투명해지는 효과 구현
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-link logo">GILFLIX</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">메인</Link>
        <Link to="/popular" className="nav-link">대세 콘텐츠</Link>
        <Link to="/search" className="nav-link">찾아보기</Link>
        <Link to="/wishlist" className="nav-link">위시리스트</Link>
        <Link to="/profile" className="nav-link">내 정보</Link>
      </div>
    </nav>
  );
}

export default Nav;
