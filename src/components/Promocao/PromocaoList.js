import React from "react";
import { useState } from "react";
import PromocaoDataService from "../../services/PromocaoDataService";
import { Link } from "react-router-dom";

const PromocaoList = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const [promocoes, setPromocoes] = useState(PromocaoDataService.getAll());

    function onChangeSearchTitle(e) {
        setSearchTitle(e.target.value);
        setPromocoes(PromocaoDataService.filterByName(e.target.value));
    }

    function deletePromocao(id) {
        if (window.confirm("Deseja excluir?")) PromocaoDataService.remove(id);

        setPromocoes(PromocaoDataService.getAll());
    }

    function deleteAllPromocoes() {
        if (
            window.confirm(
                "Tem certeza que deseja deletar todos os funcionários?"
            )
        )
            PromocaoDataService.removeAll();
        setPromocoes(PromocaoDataService.getAll());
    }

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
                <Link to="promocao/add">
                    <button type="button" className="btn btn-primary">
                        Adicionar
                    </button>
                </Link>
                <Link onClick={deleteAllPromocoes}>
                    <button type="button" className="btn btn-danger">
                        Deletar todos
                    </button>
                </Link>
            </div>
            <div className="col-md-10">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Desconto</th>
                            <th scope="col">Data Inicio</th>
                            <th scope="col">Data Fim</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {promocoes &&
                            promocoes.map((promocao, index) => (
                                <tr key={promocao.id}>
                                    <th scope="row">{promocao.id}</th>
                                    <td>{promocao.name}</td>
                                    <td>{promocao.description}</td>
                                    <td>{promocao.discount}</td>
                                    <td>{promocao.datainicio}</td>
                                    <td>{promocao.datafim}</td>
                                    <td>
                                        {" "}
                                        <Link
                                            to={"/promocao/" + promocao.id}
                                            className="badge badge-warning"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        {" "}
                                        <Link
                                            onClick={() =>
                                                deletePromocao(promocao.id)
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
export default PromocaoList;
