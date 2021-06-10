import React, { useEffect } from "react";
import { useState } from "react";
import FuncionarioDataService from "../../services/FuncionarioDataService";
import { Link } from "react-router-dom";
import AddFuncionario from "./AddFuncionario";
import Funcionario from "./Funcionario";

const FuncionarioList = () => {
    const initialState = {
        id: null,
        name: "",
        role: "",
        salary: "",
    };
    const [searchTitle, setSearchTitle] = useState("");
    const [funcionarios, setFuncionarios] = useState([]);
    const [editando, setEditando] = useState(false);
    const [funcionarioAtual, setFuncionarioAtual] = useState(initialState);

    function onChangeSearchTitle(e) {
        setSearchTitle(e.target.value);
        setFuncionarios(FuncionarioDataService.filterByName(e.target.value));
    }

    function deleteFuncionario(id) {
        if (window.confirm("Deseja excluir?")) {
            FuncionarioDataService.remove(id)
                .then(() => {
                    atualizarLista();
                })
                .catch(console.log);
        }
    }
    function atualizarLista() {
        console.log("entrei");
        FuncionarioDataService.getAll()
            .then((response) => {
                setFuncionarios(response.data);
                console.log(response.data);
            })
            .catch(console.log);
    }

    function handleAdd() {}

    function handleEditar() {}

    function deleteAllFuncionarios() {
        if (
            window.confirm(
                "Tem certeza que deseja deletar todos os funcionários?"
            )
        )
            FuncionarioDataService.removeAll()
                .then(() => {
                    atualizarLista();
                })
                .catch(console.log);
    }
    useEffect(atualizarLista, []);

    return (
        <div className="list row d-flex justify-content-center">
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
                        {funcionarios &&
                            funcionarios.map((funcionario, index) => (
                                <tr key={funcionario.id}>
                                    <th scope="row">{funcionario.id}</th>
                                    <td>{funcionario.name}</td>
                                    <td>{funcionario.role}</td>
                                    <td>
                                        {" "}
                                        <Link
                                            onClick={() => {
                                                setFuncionarioAtual(
                                                    funcionario
                                                );
                                                setEditando(true);
                                            }}
                                            className="badge badge-warning"
                                            data-toggle="modal"
                                            data-target="#editFuncModal"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        {" "}
                                        <Link
                                            onClick={() =>
                                                deleteFuncionario(
                                                    funcionario.id
                                                )
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
            <AddFuncionario atualizarLista={atualizarLista} />
            {editando ? (
                <Funcionario
                    setFuncionarios={setFuncionarios}
                    funcionarioAtual={funcionarioAtual}
                    setEditando={setEditando}
                    atualizarLista={atualizarLista}
                />
            ) : null}
        </div>
    );
};
export default FuncionarioList;
