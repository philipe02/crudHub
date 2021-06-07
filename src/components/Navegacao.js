import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/hubfarmagrande.png";

function Navegacao(props) {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    <img
                        src={logo}
                        style={{ height: "60px" }}
                        className="img-fluid"
                    />
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
