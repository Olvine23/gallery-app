/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  const imgState = {
    img: image.webformatURL,
    id: image.id,
    user: image.user,
    userImg: image.userImageURL,
  };
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link state={imgState} to="/image">
          <img className="mb-4" src={image.webformatURL} />{" "}
        </Link>
        {/* caption section */}
        <div className="md:px-6 md:py-4 ">
          <div className="font-bold text-gray-900 ml-5 text-sm mb-2">
            Photo by {image.user}
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              className="object-contain h-10 w-10 rounded-full mt-5"
              src={image.userImageURL}
            />
          </div>
          <ul className="text-xs ml-5 leading-loose">
            <li>
              <strong className="text-gray-900 ">Views: </strong>{" "}
              <strong className="text-blue-500">{image.views} </strong>
            </li>
            <li>
              <strong className="text-gray-900">Likes: </strong>{" "}
              <strong className="text-blue-500"> {image.likes} </strong>
            </li>
            <li>
              <strong className="text-gray-900">Downloads: </strong>{" "}
              <strong className="text-blue-500"> {image.downloads} </strong>
            </li>
          </ul>
        </div>
        <div className="p-0 mb-5 leading-9">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-green-200 md:ml-10 ml-5  rounded-full text-xs font-semibold text-gray-700 p-1 px-2 "
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
