import LoginPage from './login/page'
import NewUserPage from './new-user/newUser'

export function Home() {
  return (
    <div className="min-h-screen">
      <LoginPage />
    </div>
  )
}

export default function NewUser() {
  return (
    <div>
      <NewUserPage />
    </div>
  )
}