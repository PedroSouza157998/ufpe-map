import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ShowAddEvent() {
    return (
        <div>
            {/* <h1>qwe</h1> */}
            <div className="flex flex-col gap-2">
                <label htmlFor="titulo">Título</label>
                <InputText id="titulo" aria-describedby="titulo-help" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição</label>
                <InputText id="descricao" aria-describedby="descricao-help" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="data">Data</label>
                <InputText id="data" aria-describedby="data-help" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="local">Local</label>
                <InputText id="local" aria-describedby="local-help" />
            </div>
            <div className='flex justify-end mt-3'>
                <Button label='Salvar'/>
            </div>
        </div>
    )
    

}