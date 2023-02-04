import React from "react";
import './Header.scss'

const Header = ({title}) =>
    <header className="c-site-header">
        <h3>london</h3>
        <h1 className="c-site-header__title o-type__invisible">{title}</h1>
    </header>


export default Header;