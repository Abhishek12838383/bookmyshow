'use client'

import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function AllMovie() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    try {
      const res = await axios.get(
        `https://imdb.iamidiotareyoutoo.com/search?q=${query}`
      );

      console.log(res.data);
      setMovies(res.data.description || []);
    } catch (error) {
      console.error(error);
    }
  };

const handlemovie = () =>{
  const title = movie["#TITLE"];
  router.push(`/movie/${encodeURIComponent(title)}`);
}

  return (
    <div className="p-6">

      {/* 🔍 Search Bar */}
      <div className="w-full flex justify-center mt-6 px-4">
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-xl bg-white rounded-full shadow-md px-4 py-3"
        >
          <input
            type="text"
            placeholder="Search movies..."
            className="flex-1 outline-none text-gray-700 bg-transparent text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* 🎬 Movie Results */}
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {movies.length === 0 ? (
          <h2 className="text-gray-500">Search Any Movie You Want</h2>
        ) : (
          movies.map((movie, index) => (
       
<Link href="/all/moviedetail" key={index}>
  <div onClick={()=>handlemovie(movie)} className="w-64 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-md cursor-pointer">
    
    <img
      src={movie["#IMG_POSTER"]}
      alt={movie["#TITLE"]}
      className="w-full h-80 object-cover"
    />

    <div className="p-4 text-center">
      <h2 className="text-lg font-bold text-gray-800">
        {movie["#TITLE"]}
      </h2>

      <p className="text-gray-500 mt-1">
        {movie["#YEAR"]}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        {movie["#ACTORS"]}
      </p>
    </div>

  </div>
</Link>
          ))
        )}
      </div>

    </div>
  );
}