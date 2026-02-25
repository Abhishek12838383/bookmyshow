'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export default function Moviedetail({ movie}) {
  const { movie } = params;
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://imdb.iamidiotareyoutoo.com?q=${movie}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!movies) return <h2 className="p-10">Loading...</h2>;

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto">

        <img
          src={movies["#IMG_POSTER"]}
          alt={movies["#TITLE"]}
          className="w-72 mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">
          {movies["#TITLE"]}
        </h1>

        <p className="text-gray-400 mb-4">
          {movies["#YEAR"]}
        </p>

        <p className="mb-4">
          Actors: {movies["#ACTORS"]}
        </p>

        <a
          href={movies["#IMDB_URL"]}
          target="_blank"
          className="text-red-500 underline"
        >
          View on IMDb
        </a>

      </div>

    </div>
  );
}