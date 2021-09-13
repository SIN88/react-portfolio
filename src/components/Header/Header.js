import './Header.css'
import React from "react";
const Header = ({heading}) => {
    return       <header className="shadow-lg  p-4 mb-2 bg rounded">
    <h1>{heading || 'PORTFOLIO'}</h1>
  </header>
} 

export default Header;