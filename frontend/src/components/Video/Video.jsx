import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';

export default function Video({
  vidUrl,
  channel,
  description,
  song,
  likes,
  shares,
  messages
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        className='video_player'
        loop
        onClick={handleVideoPlay}
        ref={videoRef}
        src={vidUrl}
      ></video>
      <VideoFooter {...{ channel, description, song }} />
      <VideoSidebar {...{ likes, shares, messages }} />
    </div>
  );
}
