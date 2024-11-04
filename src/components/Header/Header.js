// src/components/Header/Header.js
import React from "react";
import Nav from './Nav';
import HandleAuth from "../Auth/HandleAuth";

function Header() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    return (
        <>
            {isLoggedIn ? <Nav /> : <HandleAuth />}
        </>
    );
}

export default Header;
