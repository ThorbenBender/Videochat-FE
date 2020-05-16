import React, { useState } from 'react';
import Context from './Context';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../firebase/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const ContextProvider = ({ children }) => {
  const db = firebase.firestore();

  const configuration = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
      }
    ],
    iceCandidatePoolSize: 10
  };

  const [myPeerConnection, setMyPeerConnection] = useState(
    new RTCPeerConnection(configuration)
  );
  const [localStream, setLocalStream] = useState(
    navigator.mediaDevices.getUserMedia({ audio: true })
  );

  return <Context.Provider value={{ db: db }}>{children}</Context.Provider>;
};

export default ContextProvider;
