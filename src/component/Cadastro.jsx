import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import './style/Login.css'; // Importa seu arquivo CSS personalizado
import Logo from './image/Logo.png'; // Importa a imagem corretamente
const Cadastro = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 shadow box-area" style={{ background: 'rgba(21, 25, 41, 1)' }}> 
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">

          <div className="featured-image mb-3s">
            <img src={Logo} className="img-fluid" alt="Logo" />
          </div>
          <p className="text-white fs-2" style={{ fontSize:'32px',fontFamily: 'Courier New, Courier, monospace' }}>PLANO DE NEGÓCIOS FÁCIL</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New, Courier, monospace' }}>Ferramenta web para plano de negócios</small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-white text-center">
              <p >Seja bem vindo (a), para entrar:</p>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Nome" name="nome" id="nome" />
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="CPF" name="cpf" id="cpf" />
            </div>
            <div className="input-group mb-3">
              <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email" name="email" id="email" />
            </div>
            <div className="input-group mb-1">
              <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Senha" name="senha" id="senha" />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="forgot ">
                <small>
                  <a href="">Esqueceu a senha</a>
                </small>
              </div>
            </div>
            <div className="input-group mb-3 justify-content-center">
              <button className="btn btn-lg btn-outline-light w-50 fs-6 mb-2">Entrar</button>
            </div>
            <div className="row text-white">
              <small><a href="">Já possui conta?</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro