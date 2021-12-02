import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {googleMapApiKey} from '../common/config';

const Map = (props) => {
  const [center, setCenter] = useState({lat: 42.4320781, lng: 19.2410433});
  const [zoom, setZoom] = useState(16);

  return (
    <div style={{height: '65vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: googleMapApiKey()}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          name="My Marker"
          color="#2ecc71"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
