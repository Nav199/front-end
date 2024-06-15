import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Cadastro from './component/Cadastro';
import './App.css';
import Plain_home from './component/Home/Plain_home/Plain_home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Plain_home/>} /> {/* Redireciona para Login por padrão */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
