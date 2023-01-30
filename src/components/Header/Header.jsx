import React from "react";
import './Header.scss'

const Header = ({title}) =>
    <header className="c-site-header">
        <h1 className="c-site-header__title">{title}</h1>
    </header>


export default Header;