import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎬 YTS.MX</div>
      <nav>
        <input type='text' className='search-input' placeholder='Search something'/>
        <a href="#">Home</a>
        <a href="#">4K</a>
        <a href="#">Trending</a>
        <a href="#">Browse</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </nav>
    </header>
   
  );
};

export default Header;
