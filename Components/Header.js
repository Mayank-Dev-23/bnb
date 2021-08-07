import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"

function Header({nav,change}) {
  return (
    <header  className={nav ? "p-3 md:px-10 sticky transition duration-300  shadow-md ease-in  bg-white  top-0 z-50  items-center   grid grid-cols-3"
  : "p-3 md:px-10 absolute w-full top-0 z-50  items-center   grid grid-cols-3"
  }>
  
 {/* LEFT */}

 <div className="cursor-pointer my-auto">
   <img src="https://links.papareact.com/qd3"  
 width={120}

   />
 </div>
 

 {/* CENTER */}

 <div className="flex items-center md:border-2 rounded-full py-1 md:shadow-sm bg-gray-100">
   <input  className="flex-grow outline-none pl-5  text-sm bg-transparent  text-gray-500 placeholder-gray-400 py-2"  type="text" placeholder="Start your search" />
   <SearchIcon  className="h-8 bg-red-400 rounded-full p-2 hidden md:inline-flex md:mx-2 " />
 </div>

 {/* RIGHT */}
 
 <div className={change ? "flex items-center justify-end space-x-4 text-gray-500" :"flex items-center justify-end space-x-4 text-white "}>
   <p className="hidden md:inline font-semibold ">Become a Host</p>
   <GlobeAltIcon className="h-6 cursor-pointer" />

   <div className="flex items-center space-x-2 border-2  p-1 rounded-full">
     <MenuIcon  className="h-6"/>
     <UserCircleIcon  className="h-6"/>
   </div>
 </div>
 
   
    </header>
  );
}

export default Header;
