import { useEffect, useState } from  'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Dialog } from 'primereact/dialog';

// import { toast } from 'react-toastify';
import 'primeicons/primeicons.css';
import 'leaflet/dist/leaflet.css'
import ShowAddEvent from './components/show-addd-event';

export default function MapPage() {
    
    const [showAddEvent, setShowAddEvent] = useState(false)
    
    const router = useRouter();

    const Map = dynamic( import('../../components/Map'), {ssr: false})

    return (
        <main className="flex items-center justify-center h-screen bg-green">
            {/* loading ... */}
            <div className='flex flex-col h-[95vh] w-24 mt-[5vh] gap-3 items-center text-white'>
                <i className='pi pi-user' />
                <i className='pi pi-filter' />
                <i className='pi pi-plus' onClick={() => setShowAddEvent(true)}/>
            </div>
            <Map />
            <Dialog header="Criar Novo Evento" visible={showAddEvent} style={{ width: '50vw' }} onHide={() => setShowAddEvent(false)}>
                <ShowAddEvent />
            </Dialog>
        </main>
    )
}

