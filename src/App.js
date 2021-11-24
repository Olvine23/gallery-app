import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import { Title } from './components/Title';
// import Header from './Header';
// import Footer from './Footer';
import './assets/main.css';
import img from './assets/img.jpg';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-template-curly-in-string
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`).then((res) => res.json()).then((data) => { setImages(data.hits); setIsLoading(false); }).catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container mx-auto ">
      <ImageSearch searchText={(text) => setTerm(text)} />
      <Title />
      { isLoading ? <h1 className="text-6xl text-center mx-auto mt-48">Loading...</h1>
        : (
          <div className=" md:grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}

          </div>
        ) }

    </div>

  );
}

export default App;
