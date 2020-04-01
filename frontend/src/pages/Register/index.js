import React from 'react';
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function Register() {
    return (
        <div className="register-container">
        <div className="content">
        <section>

        </section>
        <img src={logoImg} alt="Be the hero"/>

        <h1> Cadastro </h1>
        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a enontrarem os casos da sa ONG.</p>

        <Link className=".back-link" to ="/register">
                    <FiArrowLeft size={16} color="#e02041" />
                    Não tenho cadastro
         </Link>

        <form>
            <input placeholder="Nome da ONG" />
            <input type="email" placeholder="E-mail" />
            <input placeholder="WhatsApp" />
            
            <div className="input-group">
                <input placeholder="Cidade" />
                <input placeholder="UF" style={{ width: 80 }} />

            </div>
            <button className="button" type="submit"> Cadastrar </button>
        </form>
        </div>
        </div>

    )
}
