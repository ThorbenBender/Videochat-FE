import React, { useCallback } from 'react';
import Context from './Context';
import * as firebase from 'firebase';
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

  console.log(new RTCPeerConnection(configuration).createOffer());

  const createRoom = useCallback(
    async roomId => {
      let myPeerConnection = new RTCPeerConnection(configuration);
      const offer = await myPeerConnection.createOffer();
      await myPeerConnection.setLocalDescription(offer);

      const roomOffer = {
        offer: {
          type: offer.type,
          sdp: offer.sdp
        }
      };
      const roomRef = await db
        .collection('rooms')
        .doc(roomId)
        .set(roomOffer);
      roomRef.onSnapshot(async snapshot => {
        const data = snapshot.data();
        if (!myPeerConnection.currentRemoteDescription && data.answer) {
          const answer = new RTCSessionDescription(data.answer);
          await myPeerConnection.setRemoteDescription(answer);
        }
      });
    },
    [db, configuration]
  );

  return (
    <Context.Provider value={{ db: db, createRoom: createRoom }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
