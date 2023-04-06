import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import useMap from '../hooks/useMap';

import {MapPins} from '../const';
import {MapPinsProps} from '../mocks/offers';


const defaultCustomIcon = leaflet.icon({
  iconUrl: MapPins.defaultPin,
  iconSize: [27, 39],
  iconAnchor: [18, 39],
});

// const activeCustomIcon = leaflet.icon({
//   iconUrl: MapPins.activePin,
//   iconSize: [27, 39],
//   iconAnchor: [18, 39],
// });

function Map({city, offers}: MapPinsProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((item) => {
        leaflet
          .marker({
            lat: item.city.location.latitude,
            lng: item.city.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return (
    <section className='cities__map map' style={{width: '100%'}} ref={mapRef}></section>
  );
}

export default Map;
