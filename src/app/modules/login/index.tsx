import { useState } from  'react';
import { useRouter } from 'next/router';
import axios from '../../../global/services/api';
import { toast } from 'react-toastify';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {

      const {data} = await axios.post('/login', {
        email,
        password
      })

      if(data.auth) toast.success('Login efetuado com sucesso!')
      localStorage.setItem("token", data.token)

    } catch (error: any) {
      if(error.response.status === 401) toast.error("Usuário não encontrado!")
    }

    // Verificar se o email é válido
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    

    if (email === 'testecin@gmail.com' && password === 'testecin12345') {
      // caso o email e senha estejam corretos ele redireciona para /map
      router.push('/map');  
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
                {error && <p className="text-red-500">{error}</p>}
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
                  type="password"
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
              onClick={handleLogin}
            >
              Acessar
            </button>
          <form/>
          <button className='self-start mt-8'>Esqueci minha senha</button>
          <button className='self-start mt-4'>Criar novo usuário</button>
        </div>
    </main>
  )
}
