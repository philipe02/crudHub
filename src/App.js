import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRemedio from "./components/Remedio/AddRemedio";
import Remedio from "./components/Remedio/Remedio";
import RemedioList from "./components/Remedio/RemedioList";
import "./App.css";

import AddFuncionario from "./components/Funcionario/AddFuncionario";
import Funcionario from "./components/Funcionario/Funcionario";
import FuncionarioList from "./components/Funcionario/FuncionarioList";

import AddPromocao from "./components/Promocao/AddPromocao";
import Promocao from "./components/Promocao/Promocao";
import PromocaoList from "./components/Promocao/PromocaoList";

import Home from "./components/Home";

import Navegacao from "./components/Navegacao";

function App() {
    return (
        <div>
            <Navegacao />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/funcionario"
                        component={FuncionarioList}
                    />
                    <Route exact path={"/Remedios"} component={RemedioList} />
                    <Route exact path="/add" component={AddRemedio} />
                    <Route path="/Remedios/:id" component={Remedio} />
                    <Route
                        exact
                        path="/funcionario/add"
                        component={AddFuncionario}
                    />
                    <Route path="/funcionario/:id" component={Funcionario} />

                    <Route exact path={"/Promocao"} component={PromocaoList} />
                    <Route exact path="/Promocao/add" component={AddPromocao} />
                    <Route path="/Promocao/:id" component={Promocao} />
                </Switch>
            </div>
        </div>
    );
}
export default App;
