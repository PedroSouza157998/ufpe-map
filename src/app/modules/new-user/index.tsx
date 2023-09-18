import { useState } from  'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import axios from '../../../global/services/api';

export default function NewUserPage() {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
    
          const resp = await axios.post('/user', {
            nome: fullName,
            email,
            senha: password
          })
          
          if (resp.status === 200) {
            toast.success('Usuário criado com sucesso!')
            // localStorage.setItem("token", resp.data.token)
            router.push('/map');  
          } else {
            toast.error("Usuário já existente!")
          }
    
        } catch (error: any) {
          toast.error("Ocorreu um erro interno na aplicação, tente novamente mais tarde!")
        }
      }

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-green">
            <form className='w-96 flex flex-col bg-white bg-opacity-30 items-center text-white rounded-3xl p-6'
                onSubmit={handleSubmit}
            >
                <h3 className='text-white text-xl font-bold m-2'>NOVO USUÁRIO</h3>
                
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
                    <label className='block text-white font-semibold mb-2 mt-4'>SEU E-MAIL:</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className='block text-white font-semibold mb-2 mt-4'>INFORME SUA SENHA</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label className='block text-white font-semibold mb-2 mt-4'>CONFIRME SUA SENHA</label>
                    <input 
                    className='w-80 border text-gray-600 rounded-lg p-2' 
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="w-23 bg-btn-login text-white font-semibold p-1 px-6 mt-8 rounded-lg">
                    CADASTRAR
                </button>
            </form>
        </main>
    )
}

