import React, { Component } from 'react'

 class Header extends Component {
     constructor(props) {
         super(props);
         this.state = { findWeather: true };
         

         this.handleClick = this.handleClick.bind(this);
     }
     

     handleClick() {
         this.setState(state => ({
             findWeather: !state.findWeather
         }));
     }

     handleClick = () => {
         console.log('Click happened');
     }
    
      

    render() {
        return (
            <div>
                <header className="app-header">

                    <input placeholder="City" className="inputBar" />

                    <button onClick={this.handleClick} className="btn">FIND WEATHER</button>
                   
                </header>
                
            </div>
        )
    }
}

export default Header;
