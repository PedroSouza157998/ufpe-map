import { useState } from "react"

export default function recoverPassword() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleRecoverPassword = async(e: React.FormEvent) => {
        e.preventDefault();

        //lógica para enviar notificação email

        // Verificar se o email é válido
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        console.log('Código enviado com sucesso!')
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-green">
            <div className="w-96 h- flex flex-col bg-white bg-opacity-30 items-center text-white rounded-3xl p-6">
                <h1 className="self-start text-2xl font-semibold mb-4 ml-2">Recuperar senha</h1>
                <form action="">
                    <div className="flex flex-col justify-center">
                        <div className='mb-4'>
                            <label className='block text-white font-semibold text-lg mb-2'>Digite seu e-mail</label>
                            {error && <p className="text-red-500">{error}</p>}
                            <input 
                                type="email"
                                className="w-80 border text-gray-600 rounded-lg p-2" 
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}} 
                            />
                        </div>
                    </div>
                </form>
                <button type="submit" onClick={handleRecoverPassword} className="w-23 bg-btn-login text-white font-semibold p-1 px-6 mt-4 rounded-lg">Enviar Código</button>
            </div>
        </main>
    )
}