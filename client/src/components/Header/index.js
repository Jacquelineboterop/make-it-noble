import React, { useState } from 'react';
import { BsHouse, BsBell, BsSearch, BsGear, BsBoxArrowInRight } from 'react-icons/bs'
import logo from './logo.png'
import photo from './photo.png'
import './styles.css'

function Header() {
  const [show, setShow]= useState(false)
  return  (
    <header className="header">
      <div className="header-box">
        <a><img src={logo} className="header-icon"/></a>
        <a><BsBell className="header-icon"/></a>
      </div>
      <div className="header-box-footer">
        <a><BsSearch className="header-icon"/></a>
        <div className="user-menu-container">
          <a><BsHouse className="header-icon"/></a>
          <a onClick={() => setShow(!show)}><img src={photo} className="header-photo"/></a>  
            {show && <ul className="profile-menu">
              <li className="menu-header"><a href="#" className="txt-menu-name" >Doctor House <span className="txt-menu-alias">@DoctorCasas</span></a></li>
              <li className="menu-body"><BsGear className="menu-icon-body"/><a href="#" className="txt-menu-body">Configuracion</a></li>
              <li className="menu-footer"><BsBoxArrowInRight className="menu-icon-footer"/><a href="#" className="txt-menu-body">Cerrar sesion</a></li>
            </ul>}
        </div>
      </div>
    </header>
  )
}

export default Header;
