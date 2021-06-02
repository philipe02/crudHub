import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLaboratorio from "./Laboratório/AddLaboratorio";
import Laboratorio from "./Laboratório/Laboratorio";
import LaboratorioLisst from "./Laboratório/LaboratorioLisst";

function Home(props) {
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
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/funcionario" component={Laboratorio} />
                    <Route
                        exact
                        path="/funcionario/add"
                        component={AddLaboratorio}
                    />
                    <Route
                        path="/funcionario/:id"
                        component={LaboratorioLisst}
                    />
                </Switch>
            </div>
        </div>
    );
}

export default Home;