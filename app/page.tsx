import Link from "next/link";

export default function Home() {
  return (
    <div className="">
  

{/* home page */}

  <div className="bg-black text-white min-h-screen">

      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-black shadow-md">
        <h1 className="text-2xl font-bold text-red-600">MovieFlix</h1>
        <ul className="flex gap-6 text-gray-300 cursor-pointer">
          <li><Link href="/">Home</Link></li>
      <li><Link href="/all">All Movies</Link></li>
    <li><Link href="/mybooking">My Bookings</Link></li>
        </ul>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Unlimited Movies, TV Shows & More
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl">
          Discover and explore your favorite movies instantly.
        </p>

        {/* <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search movies..."
            className="flex-1 px-4 py-3 rounded-l-md text-white outline-none"
          />
          <button className="bg-red-600 px-6 py-3 rounded-r-md hover:bg-red-700 transition">
            Search
          </button>
        </div> */}
      </section>

   {/* 🔹 Featured Movies */}
<section className="px-8 py-16">
  <h3 className="text-2xl font-semibold mb-8 text-center">
    Featured Movies
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* Movie 1 */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img
        src="https://m.media-amazon.com/images/I/51oD8D0pYcL._AC_.jpg"
        alt="Inception"
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold">Inception</h4>
        <p className="text-gray-400">2010</p>
      </div>
    </div>

    {/* Movie 2 */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img
        src="https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"
        alt="Spider-Man"
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold">Spider-Man</h4>
        <p className="text-gray-400">2002</p>
      </div>
    </div>

    {/* Movie 3 */}
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <img
        src="https://m.media-amazon.com/images/I/71nDPyE7kGL._AC_SL1024_.jpg"
        alt="Interstellar"
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold">Interstellar</h4>
        <p className="text-gray-400">2014</p>
      </div>
    </div>

  </div>
</section>

      {/* 🔹 Footer */}
      <footer className="bg-black text-center py-6 text-gray-500 border-t border-gray-800">
        © 2026 MovieFlix. All rights reserved.
      </footer>

    </div>

    </div>
  );
}
