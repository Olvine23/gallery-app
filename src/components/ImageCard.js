/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import img from '../assets/img.jpg';
import ViewImage from './ViewImage';
const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div>
      <h2 className="uppercase text-sm md:ml-10 ml-5 ">{image.user} </h2>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">

        <img className="mb-4" src={image.webformatURL} />
        {/* caption section */}
        <div className="md:px-6 md:py-4 ">
          <div className="font-bold text-purple-500 ml-5 text-sm mb-2">
            Photo by  {image.user}
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="object-contain h-10 w-10 rounded-full mt-5" src={image.userImageURL} />
          </div>
          <ul className="text-xs ml-5 leading-loose">
            <li>
              <strong className="text-green-500 ">Views: </strong> <strong>{image.views} </strong> 
            </li>
            <li>
              <strong className="text-green-500">Likes: </strong>  <strong> {image.likes} </strong>
            </li>
            <li>
              <strong className="text-green-500">Downloads: </strong> <strong> {image.downloads} </strong>
            </li>
          </ul>
        </div>
        <div className="p-0 mb-5 leading-9">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 md:ml-10 ml-5  rounded-full text-xs font-semibold text-gray-700 p-1 px-2 ">
              #{tag}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ImageCard;
