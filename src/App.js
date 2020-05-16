import React from 'react';
import './App.css';
import VideoChat from './Components/VideoChat';
import { Route } from 'react-router-dom';
import ContextProvider from './Components/ContextProvider/ContextProvider';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <ContextProvider>
      <Route path="/" component={Dashboard} />
      <Route exact path="/room/:id" component={VideoChat} />
    </ContextProvider>
  );
}

export default App;
