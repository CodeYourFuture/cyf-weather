import React from "react";
import './Header.scss'

const Header = ({title}) =>
    <header className="c-site-header">
        <h1 className="c-site-header__title o-type__invisible">{title}</h1>
        {/* look up component */}
    </header>


export default Header;