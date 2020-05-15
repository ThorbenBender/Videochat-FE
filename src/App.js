import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoChat from './Components/VideoChat';
import { Route } from 'react-router-dom';
import ContextProvider from './Components/ContextProvider/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Route default exact path="/room/:id" component={VideoChat} />
    </ContextProvider>
  );
}

export default App;
