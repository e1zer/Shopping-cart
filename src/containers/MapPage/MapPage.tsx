import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import shopOnMap from '../../dataBase/shop.json';
import styles from './MapPage.module.css';

interface coordinates {
  id: string;
  address: string;
  lat: number;
  lng: number;
}

const MapPage = () => {

  const {id, address, lat, lng}: coordinates = shopOnMap;

  return (
    <div style={{marginTop: '5%'}}> 
      <YMaps
        
        query={{
          ns: 'use-load-option',
          load:
            'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
        }}
      >
        <Map
          defaultState={{
            center: [lng, lat],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          width={'100%'}
          height={500}
        >
          
        <Placemark geometry={[lng, lat]}
          properties={{
            iconCaption:
              `${id}`,
            balloonContentBody: 
              `${id}, ${address}`
          }}
        />
        </Map>
      </YMaps>
    </div>
  )
}

export default MapPage;