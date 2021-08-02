import React from 'react';
import { BsHouse, BsBell, BsSearch } from 'react-icons/bs'
import logo from './logo.png'
import photo from './photo.png'
import './styles.css'

function Header() {
  return  (
    <header className="header">
      <div className="header-box">
        <a><img src={logo} className="header-icon"/></a>
        <a><BsBell className="header-icon"/></a>
      </div>
      <div className="header-box">
        <a><BsSearch className="header-icon"/></a>
        <a><BsHouse className="header-icon"/></a>
        <a><img src={photo} className="header-photo"/></a>
      </div>
    </header>
  )
}

export default Header;
