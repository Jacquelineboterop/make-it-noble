import './App.css';
import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
     <Header />
    </div>
  );
}

export default App;
