import React, { useState, useContext } from 'react';

import Context from './ContextProvider/Context';

const Dashboard = props => {
  const { createRoom } = useContext(Context);

  const [roomId, setRoomId] = useState('');

  return (
    <div>
      <p>Dashboard</p>
      <input
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        placeholder="Enter room id"
      />
      <button
        disabled={!roomId}
        onClick={() => {
          createRoom(roomId);
        }}
      >
        Create Room
      </button>
    </div>
  );
};

export default Dashboard;
