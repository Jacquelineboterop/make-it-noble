import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { IoImage, IoClose, IoHappyOutline, IoAdd } from "react-icons/io5";
import photo from './photo.png'
import './styles.css'

function Combobox() {
  const [content, setContent]= useState("");
  console.log(content);
  function handlePublish(){
    axios({
     method: "POST",
     url: "http://localhost:3000/post",
     data: {
       content
     }
    }).then(() => {
      setContent("");
      <Redirect to="/posts"/>
    }).catch(error => {
      console.log(error)
    });
  }
  return  (
    <div className="overlay">
      <div className="combobox-grid-item">
        <div className="header-combobox">
         <div>
          <img src={photo} className="header-combobox-photo"/>
          <a href="#" className="txt-combobox-name" >Que estas pensando? </a>
        </div>
          <div className="header-close">
          <IoClose size="14px"/>
          </div>
        </div>
        <div className="body-combobox">
          <form>
          <input className="txt-combobox-body" value={content} onChange={(event)=> setContent(event.target.value)}></input>
          </form>
        </div>
        <div className="footer-combobox">
          <div className="footer-post-icons">
            <div className="footer-heart-icons">
            <IoImage size="16px"/>
            </div>
            <div className="footer-social-icons">
            <IoHappyOutline size="16px"/>
            </div>
          </div>
          <div className="footer-social-icons">
         <button className="button-combobox">➕ Publicar</button>
            </div>
        </div>
      </div>   

    </div>
  )
}
export default Combobox;

