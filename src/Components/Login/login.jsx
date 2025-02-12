import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input className="card" type='email' placeholder='E-mail'/>
        </div>
        <div className="input-field">
          <input className="card" type='password' placeholder='Senha'/>
        </div>


        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha</a>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/register">Registre-se</Link>

          </p>
        </div>
      </form>
    </div>
  )
}

export default Login