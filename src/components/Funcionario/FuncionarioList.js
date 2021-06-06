import React from "react";
import { useState } from "react";
import FuncionarioDataService from "../../services/FuncionarioDataService";
import { Link } from "react-router-dom";

const FuncionarioList = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [funcionarios, setFuncionarios] = useState(
        FuncionarioDataService.getAll()
    );

    function onChangeSearchTitle(e) {
        setSearchTitle(e.target.value);
    }
    function deleteFuncionario() {}

    return (
        <div class="list row">
            <div class="col-md-10">
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                </div>
            </div>
            <div class="col-md-10">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios &&
                            funcionarios.map((funcionario, index) => (
                                <tr>
                                    <th scope="row">{funcionario.id}</th>
                                    <td>{funcionario.name}</td>
                                    <td>{funcionario.role}</td>
                                    <td>
                                        {" "}
                                        <Link
                                            to={
                                                "/funcionario/" + funcionario.id
                                            }
                                            className="badge bg-warning"
                                        >
                                            <span className="badge badge-warning">
                                                Edit
                                            </span>
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
        </div>
    );
};
export default FuncionarioList;
