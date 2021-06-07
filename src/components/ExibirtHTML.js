import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLaboratorio from "./Laboratório/AddLab";
import Laboratorio from "./Laboratório/Laboratorio";
import LaboratorioLisst from "./Laboratório/LabList";

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand ml-2">
                    hubFarma
                </a>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/laboratorio/add"} className="nav-link">
                           Laboratório
                        </Link>
                    </li>
                    
                    
                </div>
            </nav>
            <div className="container mt-3">
                <Switch>
                    <Route 
                    exact path="/" 
                    component={LaboratorioLisst} />

                    <Route 
                        exact path="/laboratorio"
                        component={Laboratorio} 
                    />
                    <Route
                        exact
                        path="/laboratorio/add"
                        component={AddLaboratorio}
                    />
                    
                </Switch>
            </div>
        </div>
    );
}

export default Home;