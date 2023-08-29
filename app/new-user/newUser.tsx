'use client'

import { useState } from 'react'
import './style-new-user.css'

const NewUserPage: React.FC = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // adicionar a lógica para criar um novo usuário no backend
        console.log('Novo usuário criado:', { fullName, email })
    }

    return (
        <div className="body">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <p>
                    <h3>NOVO USUÁRIO</h3>
                    </p>
                    <div className="form-enter">
                        <label htmlFor="fullName">NOME COMPLETO:</label>
                        <p>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} />
                        </p>
                    </div>
                    <div className="form-enter">
                        <label htmlFor="email">SEU E-MAIL</label>
                        <p>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </p>
                    </div>
                    <div className="form-enter">
                        <label htmlFor="password">INFORME SUA SENHA</label>
                        <p>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </p>
                    </div>
                    <div className="form-enter">
                        <label htmlFor="confirmPassword">CONFIRME SUA SENHA</label>
                        <p>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        </p>
                    </div>
                    <button type="submit" className="cadastro">
                        CADASTRAR
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewUserPage