import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [peer_Connection, setPeer_Connection] = useState(null);
  return <Context.Provider>{children}</Context.Provider>;
};

export default ContextProvider;
