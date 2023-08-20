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
            <h2>UFPE Map</h2>
        </div>
        <div className="login-container text-white">
          <h1 className='font-semibold'>Bem vindo ao <strong className='text-[#0D615E] font-semibold'>LOGIN</strong></h1>
          <form action="#" method="POST" onSubmit={handleLogin}></form>
            <div className="input-field">
              <div className='mb-4'>
                <label className='block text-white font-semibold'>Digite seu e-mail</label>
                <input 
                  //id="email" 
                  type="email"
                  className="w-full border rounded p-2" 
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label className='block text-white font-semibold'>Digite sua senha</label>
                <input 
                  //id="senha" 
                  type="text"
                  className='w-full border rounded p-2'
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>
            <button
              type='submit'
              className='w-ful bg-btn-login text-white font-semibold p-2 rounded'
            >Acessar</button>
          <form/>
          <button>Esqueci minha senha</button>
          <button>Criar novo usuário</button>
        </div>
    </main>
  )
}
