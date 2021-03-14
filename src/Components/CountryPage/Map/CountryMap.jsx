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
                <MapContainer fullscreenControl={true} center={[longitude, latitude]} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[longitude, latitude]} />
                    <GeoJSON data={countryObj.geoData} style={style}/>
                </MapContainer>
            </div>
        </div>
    )
}



export default CountryMap;