// src/components/Header/Header.js
import React from "react";
import Nav from './Nav';

function Header() {
    // const [isLoggedIn, setIsLoggedIn] = useState();
    // useEffect(() => {
    //     setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
    // }, []);
    // console.log(isLoggedIn + " is header");
    return (
        <Nav/>
    );
}

export default Header;
