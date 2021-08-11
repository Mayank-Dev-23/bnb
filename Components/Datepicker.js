import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // them
import { DateRangePicker, DateRange } from 'react-date-range';
import {  useMediaQuery } from '@react-hook/media-query';
import { UsersIcon,  XIcon } from '@heroicons/react/solid';








function Datepicker({startDate,endDate,guests,Setguests ,Setinputtext ,search}) {
   



    const smallscreen=useMediaQuery("(max-width:36rem)");
    const largescreen=useMediaQuery("(min-width:768px)");
    const selectionrange={
        startDate: startDate.value,
        endDate: endDate.value,
        key:"selection"
    }


    const options={
        ranges:[selectionrange],
        minDate:new Date(),
        rangeColors:['#FD5B61'],
        onChange: handleselect,
    }

  function  handleselect(ranges){
startDate.setValue(ranges.selection.startDate);
endDate.setValue(ranges.selection.endDate);
    }

    return (
        <div className="">
{smallscreen ? (<DateRange  {...options} />) :
 (<DateRangePicker {...options} />)}

<div className="flex items-center mb-4 px-2">
            <h2 className="text-lg flex-grow font-semibold ">Number of Guests</h2>
           <UsersIcon className="h-5" />
           <input type="number"
           className="w-11 pl-2 text-lg outline-none text-red-400"
           min={1} 
           max={25}
           value={guests}
           onChange={(e)=>Setguests(e.target.value)}
           />
          </div>
          <div className="flex md:justify-center">
              {largescreen ? (<  XIcon 
              onClick={()=>Setinputtext("")}
              className="h-10 bg-gray-200 rounded-full p-2 flex justify-center hover:bg-red-400 hover:text-white cursor-pointer transition duration-200 ease-in animate-pulse" />) :(
              <button 
              onClick={()=>Setinputtext("")}
              className="flex-grow hover:bg-gray-300 rounded-lg p-1 hover:text-black transition duration-200  ease-in">Cancel</button>
              )}
              <button 
              onClick={search}
              className="flex-grow md:hidden text-red-400 hover:bg-red-400 hover:text-white rounded-lg p-1 transition  duration-200 ease-in">Search</button>
              </div>
            
        </div>
    )
}

export default Datepicker
