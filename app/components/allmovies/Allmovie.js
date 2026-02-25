'use client'


import { useState,useEffect } from "react";

export default function AllMovie() {
  const [query, setQuery] = useState("");

useEffect(()=>{

axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
.then(res=>console.log("details of",res));

},[query]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
   <div>

 <div className="w-full flex justify-center mt-12 px-4">
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

    {/* movie api */}

    {



    }

   </div>
  );
}