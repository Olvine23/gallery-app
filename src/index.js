import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ViewImage from './components/ViewImage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="header" element={<Header />} />
      <Route path="/image/" element={<ViewImage  />} />
    </Routes>
  </BrowserRouter>, document.getElementById('root'),
);

reportWebVitals();
