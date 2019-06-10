import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header">

                    <input placeholder="City" className="inputBar" />

                    <button className="btn">FIND WEATHER</button>
                </header>
                
            </div>
        )
    }
}

export default Header;
