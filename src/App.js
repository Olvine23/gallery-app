import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import VideoCard from './components/VideoCard';
import ImageSearch from './components/ImageSearch';
import { Title } from './components/Title';
// import Header from './Header';
// import Footer from './Footer';
import './assets/main.css';

function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line no-console
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`).then((res) => res.json()).then((data) => { setImages(data.hits); setIsLoading(false); }).catch((err) => console.log(err));
  }, [term]);

  // videos
  useEffect(() => {
    // eslint-disable-next-line no-console
    fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&pretty=true`).then((res) => res.json()).then((data) => { setVideos(data.hits); console.log(videos); setIsLoading(false); })
    .catch((err) => console.log(err));
  }, [term]);
  console.log(videos);
  const {large,medium,small} = videos;
  console.log(large);
   
  return (
    <div className="container mx-auto ">

      <ImageSearch searchText={(text) => setTerm(text)} />
      <Title />
      {!isLoading && images.length === 0 && <h1 className="text-xl text-center mx-auto md:mt-48 sm:mt-10">Could not match results of {term} </h1>}
      { isLoading ? <h1 className="text-6xl text-center mx-auto mt-48">Loading...</h1>
        : (
          <div className="grid grid-cols-2 md:grid md:grid-cols-3 gap-3 md:mx-10 mx-2 whitespae-normal md:gap-3">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}

          </div>
        ) } 
      { isLoading ? <h1 className="text-6xl text-center mx-auto mt-48">Loading...</h1>
        : (
          <div>
            <h2 className=" text-center text-purple-500 font-bold text-xl mt-10">Hello, videos are coming soon</h2>
            {/* {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))} */}

          </div>
        ) }

    </div>

  );
}

export default App;
