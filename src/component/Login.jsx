import React from 'react';
import Logo from './image/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import './style/Login.css'; // Importa seu arquivo CSS personalizado

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 shadow box-area" style={{ background: 'rgba(21, 25, 41, 1)' }}>
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-image mb-3">
            <img src={Logo} className="img-fluid" alt="Logo" />
          </div>
          <p className="text-white fs-2" style={{ fontSize: '32px', fontFamily: 'Courier New, Courier, monospace' }}>PLANO DE NEGÓCIOS FÁCIL</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New, Courier, monospace' }}>Ferramenta web para plano de negócios</small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-white">
              <p>Seja bem vindo (a), para entrar:</p>
            </div>
            <div className="col-sm-12 col-md-8 mb-3">
              <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email" name="email" id="email" />
            </div>
            <div className="col-sm-12 col-md-8 mb-3">
              <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" name="password" id="password" />
            </div>
            <div className="col-sm-12 col-md-8 mb-5">
              <div className="forgot">
                <small>
                  <a href="">Esqueceu a senha</a>
                </small>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 mb-3">
              <button className="btn btn-lg btn-outline-light w-100 fs-6 mb-2">Entrar</button>
            </div>
            <div className="col-sm-12 col-md-8 text-white">
              <small>Não possui conta? <a href="">Cadastre-se</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
