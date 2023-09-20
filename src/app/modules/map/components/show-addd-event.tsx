import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { LatLng } from 'leaflet';
import axios from '../../../../global/services/api';
import { useState } from 'react';

export default function ShowAddEvent({
    // latlng
}
// : {latlng: LatLng}
) {
    const [titulo, setTitulo ] = useState('')
    const [descricao, setDescricao ] = useState('')
    const [data, setData ] = useState<string | Date | Date[] | null>(null)
    const [referencia, setReferencia ] = useState('')

    return (
        <div>
            {/* <h1>qwe</h1> */}
            <div className="flex flex-col gap-2">
                <label htmlFor="titulo">Título</label>
                <InputText value={titulo} onChange={(e) => setTitulo(e.target.value)} id="titulo" aria-describedby="titulo-help" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição</label>
                <InputText value={descricao} onChange={(e) => setDescricao(e.target.value)} id="descricao" aria-describedby="descricao-help" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="data">Data</label>
                <Calendar value={data} onChange={(e) => {
                    //@ts-ignore
                    setData(e.value)
                    }} id="data" aria-describedby="data-help" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="referencia">Referencia</label>
                <InputText value={referencia} onChange={(e) => setReferencia(e.target.value)} id="referencia" aria-describedby="referencia-help" />
            </div>
            <div className='flex justify-end mt-3'>
                <Button label='Salvar' onClick={async () => {
                    await axios.post('/evento', {})
                }}/>
            </div>
        </div>
    )
    

}