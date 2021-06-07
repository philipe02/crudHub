import React from "react";
import { useState } from "react";
import FuncionarioDataService from "../../services/FuncionarioDataService";
import { Link } from "react-router-dom";
import AddFuncionario from "./AddFuncionario";

const FuncionarioList = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [funcionarios, setFuncionarios] = useState(
        FuncionarioDataService.getAll()
    );

    function onChangeSearchTitle(e) {
        setSearchTitle(e.target.value);
        setFuncionarios(FuncionarioDataService.filterByName(e.target.value));
    }

    function deleteFuncionario(id) {
        if (window.confirm("Deseja excluir?"))
            FuncionarioDataService.remove(id);

        setFuncionarios(FuncionarioDataService.getAll());
    }
    function atualizarLista() {
        console.log("entrei");
        setFuncionarios(FuncionarioDataService.getAll());
    }

    function handleAdd() {}

    function handleEditar() {}

    function deleteAllFuncionarios() {
        /* if (
            window.confirm(
                "Tem certeza que deseja deletar todos os funcionários?"
            )
        )
            FuncionarioDataService.removeAll(); */
        console.log(funcionarios);
        setFuncionarios(FuncionarioDataService.getAll());
    }

    return (
        <div className="list row d-flex justify-content-center">
            <AddFuncionario atualizarLista={atualizarLista} />

            <div className="col-md-10">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                </div>
            </div>
            <div className="mb-2 w-50 d-flex justify-content-between">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addFuncModal"
                >
                    Adicionar
                </button>

                <button
                    type="button"
                    className="btn btn-danger "
                    onClick={deleteAllFuncionarios}
                >
                    Deletar todos
                </button>
            </div>
            <div className="col-md-10">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Cargo</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((funcionario, index) => (
                            <tr key={funcionario.id}>
                                <th scope="row">{funcionario.id}</th>
                                <td>{funcionario.name}</td>
                                <td>{funcionario.role}</td>
                                <td>
                                    {" "}
                                    <Link
                                        to={"/funcionario/" + funcionario.id}
                                        className="badge badge-warning"
                                    >
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    {" "}
                                    <Link
                                        onClick={() =>
                                            deleteFuncionario(funcionario.id)
                                        }
                                        className="badge badge-danger"
                                    >
                                        Remove
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
};
export default FuncionarioList;
