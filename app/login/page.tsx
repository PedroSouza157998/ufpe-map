'use client'
import { useState } from  'react';
import './stylePage.css'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
            <img src="https://i.ibb.co/hxN3P63/Logo.png" alt="Logo UFPE" />
            <h2 className='text-white text-xl font-bold m-4'>UFPE Map</h2>
        </div>
        <div className=" w-96 h- flex flex-col bg-white bg-opacity-30 items-center text-white rounded-3xl p-6">
          <h1 className='text-xl font-semibold mb-8'>Bem vindo ao <strong className='text-[#0D615E] font-bold'>LOGIN</strong></h1>
          <form action="#" method="POST" onSubmit={handleLogin}></form>
            <div className="flex flex-col justify-center">
              <div className='mb-4'>
                <label className='block text-white font-semibold mb-2'>Digite seu e-mail</label>
                <input 
                  type="email"
                  className="w-80 border text-gray-600 rounded-lg p-2" 
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label className='block text-white font-semibold mb-2'>Digite sua senha</label>
                <input 
                  type="text"
                  className='w-80 border text-gray-600 rounded-lg p-2'
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>
            <button
              type='submit'
              className='w-ful bg-btn-login text-white font-semibold p-1 px-6 mt-8 rounded-lg'
            >Acessar</button>
          <form/>
          <button className='self-start mt-8'>Esqueci minha senha</button>
          <button className='self-start mt-4'>Criar novo usuário</button>
        </div>
    </main>
  )
}
