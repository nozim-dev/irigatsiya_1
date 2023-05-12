import React from 'react';
import ReactPlayer from 'react-player';

const YouTubeVideo = ({ videoUrl }) => {
  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100%"
        height="auto"
        config={{
          youtube: {
            playerVars: { showinfo: 1 } // Additional YouTube player options
          }
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
