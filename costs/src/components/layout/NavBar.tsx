import React from "react";
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contato</Link>
            </li>
            <li>
                <Link to="/company">Empresa</Link>
            </li>
            <li>
                <Link to="/newproject">Novo Projeto</Link>
            </li>
        </ul>
    )
}

export default NavBar;