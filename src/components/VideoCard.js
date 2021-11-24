import React from 'react'

const VideoCard = ( {video}) => {
    return (
        <div>
            <h2>{video.user}</h2>
            <img src ={video.userImageURL}></img>
            {video.id}
             
        </div>
    )
}

export default VideoCard;
