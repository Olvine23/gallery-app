import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ViewImage from './components/ViewImage';
import VideoCard from './components/VideoCard';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="header" element={<Header />} />
      <Route path="/image/" element={<ViewImage  />} />
      <Route path="/videos/" element={<VideoCard />} />
    </Routes>
  </BrowserRouter>, document.getElementById('root'),
);

reportWebVitals();
