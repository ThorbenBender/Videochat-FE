import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoChat from './Components/VideoChat'
import {Route} from 'react-router-dom'

function App() {
  return (
    <Route default exact path="/room/:id" component={VideoChat} />
  );
}

export default App;
