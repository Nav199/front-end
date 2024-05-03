import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import './style/Login.css'; // Importa seu arquivo CSS personalizado
import Logo from './image/Logo.png'; // Importa a imagem corretamente
import { InputText } from 'primereact/inputtext'; // Importa o componente InputText do PrimeReact
import { Button } from 'primereact/button'; // Importa o componente Button do PrimeReact
import { FloatLabel } from "primereact/floatlabel";

const Cadastro = () => {
  const [nome, setUsername] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 shadow box-area" style={{ background: 'rgba(21, 25, 41, 1)' }}> 
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-image mb-3s">
            <img src={Logo} className="img-fluid" alt="Logo" />
          </div>
          <p className="text-white fs-2" style={{ fontSize:'32px', fontFamily: 'Courier New, Courier, monospace' }}>PLANO DE NEGÓCIOS FÁCIL</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New, Courier, monospace' }}>Ferramenta web para plano de negócios</small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-white text-center">
              <p>Seja bem vindo (a), para entrar:</p>
            </div>
            <div className="input-group mb-3">
              <FloatLabel>
                <InputText value={nome} onChange={(e) => setUsername(e.target.value)} className="form-control form-control-lg bg-light fs-6" name="nome" id="nome" />
                <label htmlFor="nome">Nome</label>
              </FloatLabel>
            </div>
            <div className="input-group mb-3">
              <FloatLabel>
                <InputText value={cpf} onChange={(e) => setCpf(e.target.value)} className="form-control form-control-lg bg-light fs-6" name="cpf" id="cpf" />
                <label htmlFor="cpf">CPF</label>
              </FloatLabel>
            </div>
            <div className="input-group mb-3">
              <FloatLabel>
                <InputText value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg bg-light fs-6"  name="email" id="email" />
                <label htmlFor="email">Email</label>
              </FloatLabel>
            </div>
            <div className="input-group mb-1">
              <FloatLabel>
                <InputText value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-lg bg-light fs-6"  name="senha" id="senha" />
                <label htmlFor="senha">Senha</label>
              </FloatLabel>
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="forgot ">
                <small>
                  <a href="">Esqueceu a senha</a>
                </small>
              </div>
            </div>
            <div className="input-group mb-3 justify-content-center">
              <Button className="btn btn-lg btn-outline-light w-50 fs-6 mb-2" label="Entrar" />
            </div>
            <div className="row text-white">
              <small><a href="">Já possui conta?</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
