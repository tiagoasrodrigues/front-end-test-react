import { FcGoogle } from 'react-icons/fc'
import './style.css';

export function Button() {
  return (
    <main className="container">
      <div className="button signin">
        <input type="submit" value="Entrar" className='input-enter' />
      </div>
      <div className='google-icon-cont'>
        <FcGoogle size={35} />
      </div>
      <div className="button signin-google">
        <input type="submit" value="Logar com o Google" className='input-google' />
      </div>
    </main>
  )
}