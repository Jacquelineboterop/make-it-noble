import React from 'react';
import { Modal } from 'react-bootstrap';
import { BsHouse, BsBell, BsSearch } from 'react-icons/bs'
import photo from './photo2.png'
import './styles.css'

function Post() {
  return  (
    <Modal.Dialog className="post">
      <header className="post-header">
        <a><BsSearch className="header-icon"/></a>
        <a><BsBell className="post-icon"/></a>
      </header>
      <section className="post-content">
        <a><BsSearch className="header-icon"/></a>
        <a><BsBell className="post-icon"/></a>
      </section>
      <section className="post-footer">
        <a><BsSearch className="header-icon"/></a>
        <button className="publish-button">Publicar</button>
        <a><BsBell className="post-icon"/></a>
      </section>

    </Modal.Dialog>
  )
}

export default Post;
