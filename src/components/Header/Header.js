// src/components/Header/Header.js
import React, { useEffect, useState } from "react";
import Nav from './Nav';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
    }, []);
    console.log(isLoggedIn + " is header");
    return (
        <>
            {isLoggedIn ? <Nav /> : null}
        </>
    );
}

export default Header;
