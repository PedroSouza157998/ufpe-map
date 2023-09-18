import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'leaflet/dist/leaflet.css'

export default function MapComponent() {
    return (
        <MapContainer center={[-8.0367262,-34.9123917]} zoom={12} scrollWheelZoom={true} style={{height: "100%", width: "100%"}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker 
                position={[-8.0367262,-34.9123917]}
                draggable={false}
                // animate={true}
            >
                <Popup>
                    Hey ! you found me
                </Popup>
            </Marker>
        </MapContainer>
    )
}