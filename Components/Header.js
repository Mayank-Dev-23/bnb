import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  

} from "@heroicons/react/solid";
import { useState, useEffect } from "react";

import { useRouter } from "next/dist/client/router";
import Datepicker from "./Datepicker";

function Header() {
  const [inputtext, Setinputtext] = useState("");

  const router = useRouter();

  const [nav, Setnav] = useState(false);
  const [change, Setchange] = useState(false);
  const[startDate,SetstartDate]=useState(new Date());
  const[endDate,SetendDate]=useState(new Date());
  const[guests,Setguests] = useState(1);


  useEffect(() => {
    const change = () => {
      if (window.scrollY >= 10) {
        Setnav(true);
        Setchange(true);
      } else {
        Setnav(false);
        Setchange(false);
      }
    };
    window.addEventListener("scroll", change);
    return () => window.removeEventListener("scroll", change);
  }, []);

  const search=()=>{
    router.push({
      pathname:"/search",
      query:{
        location: inputtext,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        guests,
      }

    })
    setTimeout(() => {
      Setinputtext("");
    }, 100);
  }

  return (
    <header
      className={
        !nav
          ? "p-3 md:px-10 absolute w-full top-0 left-0 z-50   items-center   grid grid-cols-3 nav "
          : "p-3 md:px-10 sticky  shadow-md bg-white w-full  top-0 z-50  items-center  nav  grid grid-cols-3"
      }
    >
      {/* LEFT */}

      <div className="cursor-pointer my-auto">
        <img
          onClick={() => router.push("/")}
          src="https://links.papareact.com/qd3"
          width={120}
        />
      </div>

      {/* CENTER */}

      <div className="flex items-center md:border-2 rounded-full py-1 md:shadow-sm bg-gray-100">
        <input
          value={inputtext}
          onChange={(e) => Setinputtext(e.target.value)}
          className="flex-grow outline-none pl-5  text-sm bg-transparent  text-gray-500 placeholder-gray-400 py-2"
          type="text"
          placeholder="Start your search"
        />
        {inputtext && (
          <SearchIcon
          onClick={search}
          className="h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white hidden md:inline-flex md:mx-2 " />
        )}
      </div>

      {/* RIGHT */}

      <div
        className={
          change
            ? "flex items-center justify-end space-x-4 text-gray-500"
            : "flex items-center justify-end space-x-4 text-white "
        }
      >
        <p className="hidden md:inline font-semibold ">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2  p-1 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {inputtext && (
        <div className="flex  flex-col col-span-3 mx-auto mt-1 rounded-lg  p-1 picker shadow-xl">
          <Datepicker
         startDate={{value:startDate , setValue:SetstartDate}}
         endDate={{value:endDate , setValue:SetendDate}}
        guests={guests}
        Setguests={Setguests}
        inputtext={inputtext}
        Setinputtext={Setinputtext}
        search={search}
        
          />

          
        </div>
      )}
    </header>
  );
}

export default Header;
