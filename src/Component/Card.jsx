import React from "react";

const Card = (props) => {
  const readmore = (url) => {
    window.open(url);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {props.NewsData?.map((curItem, index) => {
            if (!curItem.urlToImage) {
              return null;
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl "
              >
                <img
                  src={curItem.urlToImage}
                  alt="news"
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h2
                    onClick={() => readmore(curItem.url)}
                    className="text-lg font-semibold text-gray-900 line-clamp-2 cursor-pointer hover:text-blue-600"
                  >
                    {curItem.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {curItem.description
                      ? curItem.description
                      : "No description available"}
                  </p>

                  <button
                    onClick={() => readmore(curItem.url)}
                    className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 duration-200"
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
