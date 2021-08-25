import './App.css';
import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/post" component={Post} />
          </Switch>
      </Router>
    </div> 
  );
}

export default App;
