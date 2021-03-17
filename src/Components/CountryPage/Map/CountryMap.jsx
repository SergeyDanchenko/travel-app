import map from './CountryMap.module.scss';
import { MapContainer, TileLayer, Marker, GeoJSON  } from 'react-leaflet';
import icon from '../../../assets/images/red-pushpin.png';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [40, 40],
});

function CountryMap({ countryObj }) {

    const [latitude, longitude] = countryObj.capitalLocation.coordinates;

    const style = {
        fillColor: 'none',
        color: '#FF0000',
    };
    
    return (
        <div className={map.wrapper}>
            <div className={map.map}>
                <MapContainer crs={L.CRS.EPSG3395} fullscreenControl={true} center={[longitude, latitude]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://yandex.net/">yandex.net</a> contributors'
                        url="https://vec02.maps.yandex.net/tiles?l=map&v=19.12.23-0&x={x}&y={y}&z={z}&scale=1.25&lang=en"
                    />
                    <Marker position={[longitude, latitude]} />
                    <GeoJSON data={countryObj.geoData} style={style}/>
                </MapContainer>
            </div>
        </div>
    )
}



export default CountryMap;