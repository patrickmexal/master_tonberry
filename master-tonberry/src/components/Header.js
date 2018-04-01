import React from 'react';
import logo from "../img/tonberryLandscapeCornflower.png";

class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
    render () {
    return (
    	<div>
      			<img src={logo} alt="Logo"/>
      	</div>
    );
  }
}

export default Header;