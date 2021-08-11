import { useState } from 'react';
import ReactMapGL from 'react-map-gl';



function Map() {
const[viewport,Setviewport]=useState({
    width:"100%",
    height:"100%",
    latitude: 27.59836,
    longitude: 78.05287,
    zoom: 11,
})





    return (
        <ReactMapGL
        mapStyle="mapbox://styles/ms1210/cks7djmgy11gj18p1fkx9mdje"
    
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport)=>Setviewport(nextViewport)}
       
        
        >
            
        </ReactMapGL>
    )
}

export default Map
