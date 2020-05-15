import React from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default ContextProvider;
