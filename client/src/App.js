import './App.css';
import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts'
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
            <Route exact path="/posts" component={Posts} />
          </Switch>
      </Router>
    </div> 
  );
}

export default App;
