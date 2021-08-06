import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <header className="p-3 sticky z-50 top-0 shadow-md bg-white  grid grid-cols-3 md:px-10">
      {/* left */}
      <div className="relative h-10 items-center cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* center */}

      <div className="flex  items-center border-2 rounded-full py-2 md:shadow-sm">
          <input className="flex-grow pl-4 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
          <SearchIcon className=" hidden md:flex md:mx-2 h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white" />
      </div>

      {/* right */}
        <div className="flex space-x-2 items-center justify-end text-gray-500">
            <p className="hidden md:flex">Become a Host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />

<div className="flex items-center space-x-2 border-2 p-1 rounded-full">
   <MenuIcon  className="h-6"/>
   <UserCircleIcon className="h-6" />
</div>

        </div>
    </header>
  );
}

export default Header;
