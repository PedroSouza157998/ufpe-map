import { useState } from 'react'

export default function NewUserPage() {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault()
    //     // adicionar a lógica para criar um novo usuário no backend
    //     console.log('Novo usuário criado:', { fullName, email })
    // }

    return (
        <main className="bg-gray-400">
            <form >
                <p>
                    <h3>NOVO USUÁRIO</h3>
                </p>
                <div>
                    <label className='block text-white font-semibold mb-2'>NOME COMPLETO:</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <label className='block text-white font-semibold mb-2'>SEU E-MAIL:</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className='block text-white font-semibold mb-2'>INFORME SUA SENHA</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label className='block text-white font-semibold mb-2'>CONFIRME SUA SENHA</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="text"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {/* <button type="submit" className="cadastro">
                    CADASTRAR
                </button> */}
            </form>
        </main>
    )
}

