import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, XIcon} from "@heroicons/react/solid"
import { useState ,useEffect } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";


function Header() {


  const [inputtext,Setinputtext]=useState("");
  const[startDate,SetstartDate]=useState(new Date());
  const [endDate,SetendDate]=useState(new Date());
  const [guests,Setguests]=useState(1);
  const router= useRouter();



  const[nav,Setnav]=useState(false);
  const [change,Setchange]=useState(false);

  const search=()=>{
   
    router.push({
  pathname:"/search",
      query:{
        location:inputtext,
      startDate:startDate.toISOString(),
      endDate: endDate.toISOString(),
      guests,
      }
    
      
    })
  
  }

  


useEffect(()=>{
  const change=()=>{
    if(window.scrollY>=10){
      Setnav(true)
      Setchange(true)
      
    }
    else{
      Setnav(false)
      Setchange(false)
    }
  }
  window.addEventListener("scroll", change)
  return () => window.removeEventListener("scroll", change);
  
},[])

const selectionrange={
startDate: startDate,
endDate: endDate,
key: "selection",
}

const handleSelect=(ranges)=>{
  SetstartDate(ranges.selection.startDate);
  SetendDate(ranges.selection.endDate);
}

 
  return (
    <header  className={!nav ?  "p-3 md:px-10 absolute w-full top-0 z-50   items-center   grid grid-cols-3 ": "p-3 md:px-10 sticky  shadow-md bg-gray-200  top-0 z-50  items-center   grid grid-cols-3"
  } >
  
 {/* LEFT */}

 <div 
 
 className="cursor-pointer my-auto">
   <img
   onClick={()=>router.push("/")}
   src="https://links.papareact.com/qd3"  
 width={120}

   />
 </div>
 

 {/* CENTER */}

 <div className="flex items-center md:border-2 rounded-full py-1 md:shadow-sm bg-gray-100">
   <input 
   value={inputtext}
   onChange={(e)=>Setinputtext(e.target.value)}
   
   className="flex-grow outline-none pl-5  text-sm bg-transparent  text-gray-500 placeholder-gray-400 py-2"  type="text" placeholder="Start your search" />
  {inputtext && (
   <SearchIcon  
   onClick={search}
   className="h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white hidden md:inline-flex md:mx-2 " />
 
  )}
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

 {inputtext && (
  
  <div className= "flex flex-col sm:col-span-3  bg-white p-2 picker rounded-lg mt-1 mx-auto ">
    <DateRangePicker
  className="bg-white"
    ranges={[selectionrange]}
    minDate={new Date()}
    rangeColors={["#FD5B61"]}
    onChange={handleSelect}
    
    
    />
    <div className="flex  items-center mb-3 px-2">
      <h2 className="text-lg  sm:text-2xl flex-grow font-semibold">Number of Guests</h2>
      <UserIcon className="h-6" />
      <input type="number" 
      className="w-12 outline-none"
      value={guests}
      onChange={(e)=>Setguests(e.target.value)}
    min="1"
/>
    </div>

    <div className="flex justify-between md:justify-center px-8 ">
      <XIcon 
      onClick={()=>Setinputtext("")}
      className="h-8  bg-gray-200 rounded-full hover:bg-red-500 p-2 cursor-pointer transition duration-150 ease-in" />
      
      
      
     
      <SearchIcon  
  
      onClick={search}
      className="h-8 bg-gray-200 rounded-full p-2 hover:bg-red-500  md:hidden cursor-pointer "/>

    </div>
   
   
    
  </div>
  
  

  
 )}
 
   
    </header>
  );
}

export default Header;
