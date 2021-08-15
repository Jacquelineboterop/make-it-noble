import React, { useState } from 'react';
import { IoShareSocial, IoHeartOutline, IoChatbubblesOutline } from "react-icons/io5";
import photo from './photo.png'
import './styles.css'

function Post() {
  return  (
    <div className="wrapper">
      <div className="post-box-one">
        <div className="header-post">
          <img src={photo} className="header-post-photo"/>
          <a href="#" className="txt-post-name" >July Braum <p className="txt-date">Dic 3. 2021</p></a>
        </div>
        <div className="body-post">
          <p className="txt-post-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries.</p>
        </div>
        <div className="footer-post">
          <div>
          </div>
          <div className="footer-post-icons">
          <IoHeartOutline className="footer-heart-icon"/><a className="txt-post-footer">25</a>
          <IoChatbubblesOutline className="footer-message-icon"/><a className="txt-post-footer">1</a>
          <IoShareSocial className="footer-social-icon"/><a className="txt-post-footer-social">1</a>
          </div>
        </div>
      </div>
      <div className="two">
      </div>
      <div className="tree">
      </div>
      <div className="four">
      </div>
      <div className="five">
      </div>
      <div className="six">
      </div>
    </div>
  )
}

export default Post;
