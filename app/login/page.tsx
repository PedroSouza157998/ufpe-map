import './stylePage.css'



export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
            <img src="https://i.ibb.co/hxN3P63/Logo.png" alt="Logo UFPE" />
            <h2>UFPE Map</h2>
        </div>
        <div className="login-container">
          <h3>Bem vindo ao <strong>LOGIN</strong></h3>
          <div className="input-field">
            <div>
              <label>Digite seu e-mail</label>
              <input id='email' type="text" placeholder="Digite seu e-mail" />
            </div>
            <div>
              <label>Digite sua senha</label>
              <input id="senha" type="text" placeholder="Digite sua senha" />
            </div>
          </div>
          <button>Acessar</button>
          <button>Esqueci minha senha</button>
          <button>Criar novo usuário</button>
        </div>
    </main>
  )
}
