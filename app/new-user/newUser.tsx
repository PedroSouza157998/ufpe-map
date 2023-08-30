'use client'

import React, { useState } from 'react';
import { useRouter } from '@/node_modules/next/navigation';
import './style-new-user.css'

const NewUserPage: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [error, setError] = useState('');
    const [errorPasswordsMatch, setErrorPasswordsMath] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // adicionar a lógica para criar um novo usuário no backend

        if (!validateEmail(email)) {
            setError('Invalid email format');
        }

        if (passwordsMatch) {
            console.log('Novo usuário criado:', { fullName, email })
            router.push('/login');
        } else {
            setErrorPasswordsMath('As senhas não estão iguais');
        }
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleValidatePasswordMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePasswords(password, newPassword);
    }

    const handleConfirmPasswordMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        validatePasswords(password, newConfirmPassword);
    }

    const validatePasswords = (newPassword: string, newConfirmPassword: string) => {
        setPasswordsMatch(newPassword === newConfirmPassword);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-128 h-128 flex flex-col bg-white bg-opacity-30 items-center text-white rounded-3xl p-6">
                <form onSubmit={handleSubmit}>
                    <p className='text-xl'>
                    <strong>NOVO USUÁRIO</strong>
                    </p>
                    <div className="mt-6">
                        <label className='font-semibold text-base' htmlFor="fullName">NOME COMPLETO:</label>
                        <p>
                        <input
                            type="text"
                            id="fullName"
                            className='w-96 border text-gray-600 rounded-lg p-2'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} />
                        </p>
                    </div>
                    <div className="mt-6">
                        <label className='font-semibold text-base' htmlFor='email'>SEU E-MAIL</label>
                        {error && <p className="text-red-500">{error}</p>}
                        <p>
                        <input
                            type="email"
                            id="email"
                            className='w-96 border text-gray-600 rounded-lg p-2'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </p>
                    </div>
                    <div className="mt-6">
                        <label className='font-semibold text-base' htmlFor="password">INFORME SUA SENHA</label>
                        <p>
                        <input
                            type="password"
                            id="password"
                            className='w-96 border text-gray-600 rounded-lg p-2'
                            value={password}
                            // onChange={(e) => e.target.value}
                            onChange={handleValidatePasswordMatch}
                        />
                        </p>
                    </div>
                    <div className="mt-6">
                        <label className='font-semibold text-base' htmlFor="confirmPassword">CONFIRME SUA SENHA</label>
                        {errorPasswordsMatch && <p className="text-red-500">{errorPasswordsMatch}</p>}
                        <p>
                        <input
                            type="password"
                            id="confirmPassword"
                            className='w-96 border text-gray-600 rounded-lg p-2'
                            value={confirmPassword}
                            //onChange={(e) => setConfirmPassword(e.target.value)}
                            onChange={handleConfirmPasswordMatch}
                        />
                        </p>
                    </div>
                    <button type="submit" className="self-start w-ful bg-btn-login text-white font-semibold p-1 px-6 mt-6 rounded-lg">
                        CADASTRAR
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewUserPage