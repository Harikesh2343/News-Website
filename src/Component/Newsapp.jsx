import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Newsapp = () => {
  const [Search, SetSearch] = useState("india");
  const [NewsData, SetNewsData] = useState(null);

  const API_KEY = "c4d234da9e644f1582758f26c13432a4";

  const getdata = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${Search}&from=2025-12-26&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      SetNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handlechange = (e) => {
    SetSearch(e.target.value);
  };

 const userInput = (event) => {
  const value = event.target.value;
  SetSearch(value);
  getdata(value); 
};


  return (
    <div>
      <nav className="bg-blue-200 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">Trending News</h1>

          <ul className="flex items-center gap-6 text-blue-900 font-medium">
            <li>
              <a className="hover:text-blue-700 duration-200">All News</a>
            </li>
            <li>
              <a className="hover:text-blue-700 duration-200">Trending News</a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <input
              onChange={handlechange}
              type="text"
              placeholder="Enter Your Topic"
              className="px-4 py-2 rounded-lg outline-none border border-blue-300 focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={getdata} 
            >
              Search
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 pb-4 my-5 flex flex-wrap gap-3">
          <button
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 duration-200"
            onClick={userInput}
            value="sports"
          >
            SPORTS
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 duration-200"
            onClick={userInput}
            value="entertainment"
          >
            ENTERTAINMENT
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 duration-200"
            onClick={userInput}
            value="technology"
          >
            TECHNOLOGY
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 duration-200"
            onClick={userInput}
            value="health"
          >
            HEALTH
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 duration-200"
            onClick={userInput}
            value="politics"
          >
            POLITICS
          </button>
        </div>
      </nav>

      <div>{NewsData ? <Card NewsData={NewsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
