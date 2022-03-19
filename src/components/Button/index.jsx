import './style.css';

export function Button() {
  return (
    <main className="container">
      <div className="button input-box">
        <input type="submit" value="Entrar" />
      </div>
      <div className="login-google">
        <input type="submit" value="Logar com o Google" />
      </div>
    </main>
  )
}