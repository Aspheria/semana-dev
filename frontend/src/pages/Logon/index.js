import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import { FiLogIn} from 'react-icons/fi'
import people from '../../assets/img.svg'
import logosvg from '../../assets/logo.svg'


export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form"></section>


            <form>
            <img src={logosvg} alt="Heroes" />

                <h1> Faça seu Logon</h1>
                <input placeholder="Sua ID" />
                <button className= "button" type= "submit"> Entrar</button>

                <Link className=".back-link" to ="/register">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </form>
            <img src={people} alt="Heroes" />

        </div>
    );
}


