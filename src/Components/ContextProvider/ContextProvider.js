import React, { useState } from 'react';
import Context from './Context';
import * as firebase from 'firebase';
import firebaseConfig from '../../firebase/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const ContextProvider = ({ children }) => {
  const [peer_Connection, setPeer_Connection] = useState(null);
  const db = firebase.firestore();
  return <Context.Provider value={{ db: db }}>{children}</Context.Provider>;
};

export default ContextProvider;
