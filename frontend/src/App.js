import React, { useEffect } from 'react';
import './App.css';
import Video from './components/Video/Video';

function App({ videos, fetchVideosStart }) {
  useEffect(() => {
    fetchVideosStart();
  }, [fetchVideosStart]);

  return (
    <div className='app'>
      <div className='app_videos'>
        {videos.length ? videos.map((v, i) => <Video key={i} {...v} />) : null}
      </div>
    </div>
  );
}

export default App;
