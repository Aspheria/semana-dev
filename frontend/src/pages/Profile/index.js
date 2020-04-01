import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

export default function Profile () {
    return (

    <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be the Hero" />
            <span> Bem Vinda, APAD</span>

            <Link className="button" to ="/incidents/new">Cadastrar novo caso </Link>
            <button type="button">
            <FiPower size={18} color= "#E02041" />
            </button>
        </header>

        <h1> Casos cadastrados </h1>

        <ul>
            <li>
                <strong> Caso:</strong>
                <p> Descrição teste </p>

                <strong> Descrição: </strong>
                <p> Descrição teste</p>

                <strong> Valor: </strong>
                <p> R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>

            <li>
                <strong> Caso:</strong>
                <p> Descrição teste </p>

                <strong> Descrição: </strong>
                <p> Descrição teste</p>

                <strong> Valor: </strong>
                <p> R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>

            <li>
                <strong> Caso:</strong>
                <p> Descrição teste </p>

                <strong> Descrição: </strong>
                <p> Descrição teste</p>

                <strong> Valor: </strong>
                <p> R$ 120,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
            
        </ul>
        </div>
    );
}