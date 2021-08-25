import React from 'react';
import { IoShareSocial, IoHeartOutline, IoChatbubblesOutline } from "react-icons/io5";
import photo from './photo.png';
import './styles.css';

function Post({post}) {
  return  (
    <div className="post-grid-item">
      <div className="header-post">
        <img src={photo} className="header-post-photo"/>
        <a href="#" className="txt-post-name" >Judy Botero <p className="txt-date">24 ago. 2021</p></a>
      </div>
      <div className="body-post">
        <p className="txt-post-body">lorem issue content</p>
      </div>
      <div className="footer-post">
        <div className="footer-post-icons">
          <div className="footer-heart-icons">
            <IoHeartOutline size="16px"/><a className="txt-post-footer">25</a>
          </div>
          <div className="footer-message-icons">
            <IoChatbubblesOutline size="16px"/><a className="txt-post-footer">1</a>
          </div>
          <div className="footer-social-icons">
            <IoShareSocial size="16px"/><a className="txt-post-footer">1</a>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default Post;
