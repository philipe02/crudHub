import React from "react";
import { Link } from "react-router-dom";

function Navegacao(props) {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    Exemplo Bootstrap
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/funcionario"} className="nav-link">
                            Funcionario
                        </Link>
                    </li>
                </div>
            </nav>
        </div>
    );
}

export default Navegacao;
