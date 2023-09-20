import { MapContainer, TileLayer,Marker,Popup, useMapEvents } from 'react-leaflet'
// import RUIcon from './utils/ru-icon.png'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from 'react';
import axios from '../../../global/services/api';
import { Dialog } from 'primereact/dialog';
import ShowAddEvent from '../../modules/map/components/show-addd-event';

export default function Map() {
    function MapUtils() {
        const map = useMapEvents({
            contextmenu: (e: any) => {
            // Sua função aqui
            setShowAddEvent(true)
            setCoordenadas(e.latlng);
            },
        });

        return null;
    }


    const [evento, setEvento] = useState<any>(null)
    const [coordenadas, setCoordenadas] = useState(null)
    const [allevents, setAllevents] = useState([])
    const [showAddEvent, setShowAddEvent] = useState(false)
    
    const handleClick = (e: any) => {
        setEvento(e)
        // e.target.openPopup();
    };
    
    useEffect(() => {
        const getEventos = async () => {
            const {data} = await axios.get('/evento')
            console.log(data)
            setAllevents(data)
        } 
        getEventos()
    })
    
    return (
        <>
            <MapContainer  center={[-8.0509175,-34.950086]} zoom={16} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <MapUtils />
                {/* {allevents.map((event, index) => {
                    return (
                        <Marker 
                            position={[(index -8.0509175),-34.952686]} 
                            draggable={false} 
                            eventHandlers={{ click: (e) => handleClick(event) }}
                        ></Marker>   
                    )
                }
                )} */}
                    {/* <h1>!!!!!!!!!!!!!!!!!!!!!!!</h1> */}
            </MapContainer>
            <Dialog header={evento?.titulo || ''} visible={!!evento} style={{ width: '50vw', minWidth: '25rem' }} onHide={() => setEvento(null)}>
                <h1>{evento?.descricao || ''}</h1>
            </Dialog>
            <Dialog header="Criar Novo Evento" visible={showAddEvent} style={{ width: '50vw', minWidth: '25rem' }} onHide={() => setShowAddEvent(false)}>
                <ShowAddEvent latlng={coordenadas} />
            </Dialog>
        </>
    )
}
