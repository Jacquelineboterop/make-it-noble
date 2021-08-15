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
import Combobox from './components/Combobox'
import Register from './components/Register'
import Login from './components/Login'
import Post from './components/Post'

/*import Inicio from './components/Inicio'*/


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/signup" component={Register} />
          <Route exact path="/newpost" component={Combobox} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
