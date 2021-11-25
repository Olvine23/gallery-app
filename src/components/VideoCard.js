/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const VideoCard = ({ video }) => {
  const c = video.videos.large.url;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h2>{video.user}</h2>
      {/* // eslint-disable-next-line no-console */}
      {console.log(video.videos.large.url)}

      {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        width="220"
        height="115"
        src={c}
      />
    </div>
  );
};

export default VideoCard;
