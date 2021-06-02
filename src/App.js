import "./App.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRemedio from "./components/AddRemedio";
import Remedio from "./components/Remedio";
import RemedioList from "./components/RemedioList";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/Remedios" className="navbar-brand">
                    Exemplo Bootstrap
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/Remedios"} className="nav-link">
                            Remedios
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Switch>
                    <Route
                        exact
                        path={["/", "/Remedios"]}
                        component={RemedioList}
                    />
                    <Route exact path="/add" component={AddRemedio} />
                    <Route path="/Remedios/:id" component={Remedio} />
                </Switch>
            </div>
        </div>
    );
}
export default App;
