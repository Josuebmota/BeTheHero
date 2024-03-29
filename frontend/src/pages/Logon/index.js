import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post('session', { id })

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', res.data.name);

      history.push('/profile')
    } catch (err) {
      alert('Falha no Login, tente novamente')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes" />
    </div>
  );
}