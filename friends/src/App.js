import React, {useState, useEffect} from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FriendContext from './components/FriendContext';


import Login from './components/Login';
import Header from './components/Header';
import FriendForm from './components/FriendForm';
import FriendsList from './components/DeleteFriend';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {

  const [friends, setFriends] = useState([])

  useEffect (() => {
    axiosWithAuth()
    .get('/friends')
    .then (result => {
        console.log(result)
        setFriends(result.data)
    })
    .catch (error => {
        console.log(error)
    });
  }, []);

  const addFriend = friend => {
      axiosWithAuth()
          .post ('/friends', friend)
          .then (result => {console.log ("kd: friendcard: axios post:friends", result)})
          .catch (error => console.log(error));
  };

  const unFriend = friendId => {
      axiosWithAuth()
          .delete(`./friends/${friendId}`)
          .then(result => {
            setFriends(result.data);
          })
          .catch(error => console.log(error));
        };



   
  return (
    <>
    <Router>
      <FriendContext.Provider value = {{friends, addFriend, unFriend}}>
      <div className="App">
        
        <Header />
        <Switch>
          <PrivateRoute path = '/header' component = {Header}/>
          <PrivateRoute exact path = '/friendslist' component = {FriendsList} />
          <PrivateRoute exact path = '/friendform' component = {FriendForm} /> 
          <Route path = '/login' component = {Login} />
          <Route component = {Login} />
        </Switch>
      </div>
      </FriendContext.Provider>
      </Router>
    </>
    
  );

};
export default App;
