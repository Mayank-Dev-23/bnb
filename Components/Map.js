import { useState } from 'react';
import ReactMapGL, { Marker ,Popup }  from 'react-map-gl';
import getCenter from "geolib/es/getCenter"




function Map({data}) {


    const [location,Setlocation]=useState({});


const cordinates = data.map((result)=>({
    longitude:result.long,
    latitude:result.lat,
}));

const center = getCenter(cordinates);
console.log('====================================');
console.log(location);
console.log('====================================');

const[viewport,Setviewport]=useState({
    width:"100%",
    height:"100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
})





    return (
        <ReactMapGL
        mapStyle="mapbox://styles/ms1210/cks7djmgy11gj18p1fkx9mdje"
    
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport)=>Setviewport(nextViewport)}
       
        
        >

          {data.map((result )=>(
              <div key={result.long}>
                  <Marker
                  longitude={result.long}
                  latitude={result.lat}
                  offsetLeft={-20}
                  offsetTop={-10}
                  >
                    <svg 
                    onClick={()=>Setlocation(result)}
                    aria-label="push-pin"
                    role="img"
                    className="h-6 text-red-500 cursor-pointer animate-bounce"
                    xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>

                  </Marker>
                  {location.long === result.long ? (
                     <Popup
                     latitude={result.lat}
                     longitude={result.long}
                     onClose={()=>Setlocation({})}
                     closeOnClick={true}>
                         {result.title}
                        <img src={result.img} className="h-16 w-16" alt="" />
                     </Popup>
                  ) : (false)}
              </div>
          ))}
        </ReactMapGL>
    )
}

export default Map
