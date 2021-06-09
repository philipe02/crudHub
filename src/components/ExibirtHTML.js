import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLaboratorio from "./Laboratório/AddLab";
import Laboratorio from "./Laboratório/Laboratorio";
import LabList from "./Laboratório/LabList";

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                
                <div className="navbar-nav">
                <Link to={"/"} className="nav-link " >
                          hubFarma
                        </Link> 
                    <li className="nav-item">
                        <Link to={"/laboratorio/add"} className="nav-link">
                          Add Laboratório
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/laboratorio/:id"} className="nav-link">
                          Laboratório
                        </Link>
                    </li>
                   
                   
                    
                    
                </div>
            </nav>
            <div className="container mt-3">
                <Switch>
                    <Route 
                    exact path="/" 
                    component={LabList} />

                    <Route 
                        exact path="/laboratorio"
                        component={Laboratorio} 
                    />
                    <Route
                        exact
                        path="/laboratorio/add"
                        component={AddLaboratorio}
                    />
                     <Route
                        
                        path="/laboratorio/:id"
                        component={Laboratorio}
                    />
                </Switch>
            </div>
        </div>
    );
}

export default Home;