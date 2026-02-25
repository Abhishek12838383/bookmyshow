import Link from "next/link";

export default function Home() {
  return (
    <div className="">
    
<nav className=" pl-[10vw] pt-[20px] pr-[10vw] flex justify-between">
  <div className=" text-xl text-blue-600 font-bold">
Moviehub
  </div>

  <div>
    <ul className=" flex item-center justify-between w-[25vw] cursor-pointer">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/all">All Movies</Link></li>
    <li><Link href="/mybooking">My Bookings</Link></li>
    </ul>
  </div>
</nav>

    </div>
  );
}
