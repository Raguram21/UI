import React from 'react';
import HeaderStrip from './HeaderStrip';
import Footer from './Footer';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Maps() {
    const containerStyle = {
        width: '100%',
        height: '500px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
  return (
  <>
    <div className="flex flex-col min-h-screen px-2 bg-slate-200">
    <header className=" text-center py-4">
        <HeaderStrip name="Maps"></HeaderStrip>
      </header>
      <main className="flex-1">
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAgc8chzSlc8bWMx-ip95eLM5UU25fEA4Y">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} >
      
      </GoogleMap>
    </LoadScript>
    </div>
      </main>
    </div>
   </>
  )
}

export default Maps

