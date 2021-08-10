import './App.css';
import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  Redirect,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/Header'
import Post from './components/Post'
/*import Inicio from './components/Inicio'*/


function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Switch>
          <Route exact path="/newpost" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
