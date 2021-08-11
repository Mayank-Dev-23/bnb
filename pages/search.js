import { ArrowLeftIcon } from "@heroicons/react/solid"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"

import Footer from "../Components/Footer"

import {format} from "date-fns";
import Infocard from "../Components/Infocard";
import Map from "../Components/Map";

function search({data}) {


    const router=useRouter();
    
  
    const {location,startDate,endDate,guests}=router.query;
    

    // const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatstartDate=format(new Date(startDate), 'dd MMMM yy');
    const formatendDate=format(new Date(endDate), 'dd MMMM yy');

        // const range= `${fromatstartDate} - ${formatendDate}`
        
    return (
        <div   >
            <Head>
                <title>
                    Rooms
                </title> 
            </Head>
            
           
          
            
          
    
            <section className=" map   ">
                <Map calssName="rounded-lg" />

                <div className="px-4 pt-2  flex  absolute top-0 ">
                <ArrowLeftIcon 
                onClick={()=>router.push("/")}
               className="h-10 bg-gray-500  text-white  cursor-pointer rounded-full hover:bg-red-400 transition  transform duration-150 ease-in  p-1"/>
          
          
           
            </div>
            </section>
<main className="flex   max-w-6xl mx-auto px-6 ">


   
    <section className="flex-grow   pt-4  ">
<p className="text-xs border-b p-2 w-96 shadow-sm rounded-lg mb-4 ">300+  stays-<span className="text-white bg-red-400 p-1 rounded-lg ">{formatstartDate}</span>-<span className="text-white bg-red-400 p-1 rounded-lg">{formatendDate}</span>  for {guests}  guests</p>
<h1 className="text-3xl font-semibold  mb-6 pl-3">Stays in {location}</h1>


{data.map(item=>(
   
    <Infocard
   key={item.img}
    description={item.description}
    img={item.img}
    location={item.location}
    title={item.title}
    star={item.star}
    price={item.price}
    total={item.total}
    long={item.long}
    lat={item.lat}
 />

))}

    </section>
  
   
</main>



<Footer />

   
       
      
            
        </div>
    )
}

export default search;

export async function getServerSideProps(){
const data= await fetch("https://links.papareact.com/isz")
.then(res=>res.json());
return{
    props:{
        data,
    }
}

}
