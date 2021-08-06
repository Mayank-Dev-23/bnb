import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <header className="shadow-md py-3 px-2  grid grid-cols-3 items-center" >
  
 
 <div className="relative h-10">
     <Image src="https://links.papareact.com/qd3" 
     layout="fill"
     objectPosition="left"
     objectFit="contain"
     
     />
 </div>
 <div >
     <GlobeAltIcon className="h-7 cursor-pointer" />
 </div>
   
    </header>
  );
}

export default Header;
