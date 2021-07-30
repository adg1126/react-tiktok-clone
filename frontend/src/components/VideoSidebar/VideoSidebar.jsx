import React, { useState } from 'react';
import './VideoSidebar.css';
import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';

export default function VideoSidebar({ likes, shares, messages }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => setIsLiked(!isLiked);

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar_button'>
        {isLiked ? (
          <Favorite fontSize='large' onClick={handleLike} />
        ) : (
          <FavoriteBorder fontSize='large' onClick={handleLike} />
        )}
        <p>{isLiked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar_button'>
        <Message fontSize='large' />
        <p>{shares ? shares + 1 : shares}</p>
      </div>
      <div className='videoSidebar_button'>
        <Share fontSize='large' />
        <p>{messages ? messages + 1 : messages}</p>
      </div>
    </div>
  );
}
