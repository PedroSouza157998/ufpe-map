import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import RUIcon from './utils/ru-icon.png'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

export default function Map() {
    const handleClick = (e) => {
        console.log(e)
        e.target.openPopup();
      };
      
    return (
        <MapContainer center={[-8.0509175,-34.950086]} zoom={16} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker 
                position={[-8.0509175,-34.952686]}
                draggable={false}
                // icon={import('./utils/ru-icon.png')}
                // icon={RUIcon}
                eventHandlers={{ click: handleClick }}
            >
            </Marker>
            {/* <Marker position={[-8.0509175,-34.952586]} 
            >

            </Marker> */}
        </MapContainer>
    )
}
