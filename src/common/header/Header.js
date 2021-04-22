import React from 'react';
import "./common/header/Header.css";
import logo from "./assets/logo.svg";

class Header extends React.Component {
    render() {
        return <div className="header">
            <img src={logo} />
        </div>
    }
}

export default Header;