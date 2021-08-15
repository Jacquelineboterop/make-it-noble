import React, { useState } from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { BsHouse, BsBell, BsSearch } from 'react-icons/bs'
import './styles.css'

function Inicio() {
  const [show, setShow]= useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return  (
    <div>
      <h1>Hola desde inicio</h1>
      <button  onClick={handleShow}>New Post</button>
      <Modal show={show} onHide={handleClose} className="post">
        <Modal.Header className="post-header" closeButton>
          <a><BsSearch className="header-icon"/></a>
          <a><BsBell className="post-icon"/></a>
        </Modal.Header>
        <Modal.Body className="post-content">
          <a><BsSearch className="header-icon"/></a>
          <a><BsBell className="post-icon"/></a>
        </Modal.Body>
        <Modal.Footer className="post-footer">
          <a><BsSearch className="post-icon"/></a>
          <a><BsBell className="post-icon"/></a>
          <button className="publish-button">Publicar</button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Inicio;
