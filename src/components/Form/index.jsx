import { BiLock } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'
import './style.css';

export function Form() {
  return (
    <main className="container">
      <section className="forms">
        <div className="form-content">
          <div className="login-form">
            <form action="#" />
            <div className="input-boxes">
              <div className="input-box">
                <GoMail className='message-icon' size={26} color="rgba(0, 0 ,0 ,0.2)" />
                <input className='input-name' type="text" placeholder="Email" required />
              </div>
              <div className="input-box">
                <BiLock className='lock-icon' size={26} color="rgba(0, 0 ,0 ,0.2)" />
                <input className='input-name' type="password" placeholder="Senha" required />
                <span class="show">Mostrar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}