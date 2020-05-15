import React from 'react';



const VideoChat = props => {
    return (
        <div>
            <p>Video Chat {props.match.params.id}</p>
        </div>
    )
}


export default VideoChat;