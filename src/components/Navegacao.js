import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/hubfarmagrande.png";

function Navegacao(props) {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a href="/" className="navbar-brand">
                    <img
                        src={logo}
                        style={{ height: "60px" }}
                        className="img-fluid ml-5 mr-5"
                    />
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link
                            to={"/funcionario"}
                            className="nav-link font-weight-bold"
                        >
                            <button className="btn btn-primary">
                                Funcionario
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Remedios"} className="nav-link">
                            <button className="btn btn-success">
                                Remédios
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Promocao"} className="nav-link">
                            <button className="btn btn-warning">
                                Promoções
                            </button>
                        </Link>
                    </li>
                </div>
            </nav>
        </div>
    );
}

export default Navegacao;
