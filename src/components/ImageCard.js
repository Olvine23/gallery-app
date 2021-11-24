import React from 'react';
import img from '../assets/img.jpg';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div>
      <h1>{image.user} </h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">

        <img src={image.webformatURL} />
        {/* caption section */}
        <div className="md:px-6 md:py-4 px-0 py-0">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by  {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: {image.views} </strong>
            </li>
            <li>
              <strong>Likes:  {image.likes} </strong>
            </li>
            <li>
              <strong>Downloads:  {image.downloads} </strong>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 ">
              #{tag}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ImageCard;
