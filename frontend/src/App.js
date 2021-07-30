import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video/Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async function fetchPosts() {
      try {
        const res = await fetch(
          'https://tiktokclone-mern-backend7868.herokuapp.com/v2/posts'
        );
        const data = await res.json();

        console.log(data);
      } catch {}
    })();
  }, []);

  return (
    <div className='app'>
      <div className='app_videos'>
        <Video
          vidUrl='https://samplelib.com/lib/preview/mp4/sample-5s.mp4'
          channel='test channel'
          description='test deacription'
          song='test song'
          likes={212}
          shares={245}
          messages={342}
        />
        <Video
          vidUrl='https://samplelib.com/lib/preview/mp4/sample-10s.mp4'
          channel='test channel'
          description='test deacription'
          song='test song'
          likes={212}
          shares={245}
          messages={342}
        />
      </div>
    </div>
  );
}

export default App;
