import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className = "links">
          <ul>
            <ol>
              <Link to = "/login" >Login</Link>
            </ol>

            <ol>
              <Link to = "/friendslist">Friends List</Link>
            </ol>
          </ul>
          </div>
        
        <Switch>
          <PrivateRoute exact path = '/friendslist' component = {FriendsList} />
          <Route path = '/login' component = {Login} />
          <Route component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
