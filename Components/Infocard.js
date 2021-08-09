import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";

function Infocard({ img, description, location, title,star,price,total,long,lat,}) {

    const[like,Setlike]=useState(false);


    const liked=()=>{
        Setlike(!like)
    }
  return(
  
   <div  className="flex flex-col md:flex-row py-7 px-2  cursor-pointer hover:scale-105 hover:opacity-80 mb-4 shadow-lg rounded-xl transition duration-300 ease-out ">
<div className="relative h-56 w-auto md:h-52 md:w-80 flex-shrink-0    ">
    <Image
    src={img}
    layout="fill"
    objectFit="cover"
    className="rounded-xl  "
     />
</div>

<div className="flex flex-col  flex-grow md:pl-5  pt-2 ">

   <div className="flex justify-between  ">
       <p className="text-gray-500">{location}</p>
       <HeartIcon
       onClick={liked}
       className={like ? "h-6 text-red-500" :"h-6  cursor-pointer"}/>
   </div>
   <h2 className="text-xl">{title}</h2>
  
   <p className="text-xs pt-1 text-gray-700">{description}</p>
   <div className="flex justify-between md:pt-14">
   <div className="flex space-x-2 items-center pt-2">
    <StarIcon className="h-5 text-red-500" />
    <p>{star}</p>

</div>
<div>
    <p className="text-gray-500 text-xs md:text-sm">{price}</p>
    <p className="font-semibold md:text-lg">{total}</p>
</div>
</div>
</div>
  </div>
  
  )
}

export default Infocard;

