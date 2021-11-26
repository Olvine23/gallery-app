/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import img from '../assets/img.jpg';
import ViewImage from './ViewImage';
const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div>
      <Router>
       
      </Router>
      <h2 className="uppercase text-sm text-center">{image.user} </h2>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">

        <img src={image.webformatURL} />
        {/* caption section */}
        <div className="md:px-6 md:py-4 px-6 py-4">
          <div className="font-bold text-purple-500 text-sm mb-2">
            Photo by  {image.user}
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="object-contain h-10 w-10 rounded-full mt-2" src={image.userImageURL} />
          </div>
          <ul className="text-xs">
            <li>
              <strong className="text-green-500">Views: </strong> <strong className="px-3">{image.views} </strong> 
            </li>
            <li>
              <strong className="text-green-500">Likes: </strong>  <strong className="px-3"> {image.likes} </strong>
            </li>
            <li>
              <strong className="text-green-500">Downloads: </strong> <strong className="px-2"> {image.downloads} </strong>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 text-xs font-semibold text-gray-700 ">
              #{tag}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ImageCard;
