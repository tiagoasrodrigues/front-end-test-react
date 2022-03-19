import './style.css';
import cover from '../../images/cover.png';
import logo from '../../images/logo.png';
import { Button } from '../Button';
import { Form } from '../Form';

export function Login() {
  return (
    <main className="container">
      <div className="cover">
        <img src={cover} alt="image" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="title">
        Bem-vindo!
      </div>
      <Form />
      <div className="check-text">
        <div className="checkbox">
          <input type="checkbox" />
          <label for="rememberMe">Lembrar-me</label>
        </div>
        <div className="text"><a href="/">Esqueci minha senha</a></div>
      </div>
      <Button />
    </main>
  )
}