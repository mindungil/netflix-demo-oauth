// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">메인</Link>
      <Link to="/popular" className="nav-link">대세 콘텐츠</Link>
      <Link to="/search" className="nav-link">찾아보기</Link>
      <Link to="/wishlist" className="nav-link">위시리스트</Link>
      <Link to="/profile" className="nav-link">내 정보</Link>
    </nav>
  );
}

export default Nav;
