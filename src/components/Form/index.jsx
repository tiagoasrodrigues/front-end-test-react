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
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" required />
              </div>
              <div className="input-box">
                <i className="fa fa-lock"></i>
                <input type="password" placeholder="Senha" required />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}