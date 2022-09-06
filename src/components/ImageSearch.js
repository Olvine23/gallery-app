import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto sm:mx-auto ">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-purple-900 py-2 ml-5">
          <input onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image " />
          <button className="flex-shrink-0 bg-gray-200  mr-8 hover:bg-purple-700 border-teal-500 hover:border-purple-700 text-sm border-4 hover:text-white py-1 px-2 rounded" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
