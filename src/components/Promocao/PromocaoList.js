import React from "react";
import { useState, useEffect } from "react";
import PromocaoDataService from "../../services/PromocaoDataService";
import { Link } from "react-router-dom";
import { param } from "jquery";

const PromocaoList = () => {
    const [searchTitle, setSearchTitle] = React.useState("");
    const [promocoes, setPromocoes] = React.useState();

    useEffect(() => {
        PromocaoDataService.getAll().then(({ data }) => {
            setPromocoes(data);
        });
    }, []);

    function onChangeSearchTitle(e) {
        setSearchTitle(e.target.value);
        PromocaoDataService.filterByName(e.target.value).then(({ data }) => {
            setPromocoes(data);
        });
    }

    useEffect(() => {
        estaVazio();
    }, [searchTitle]);

    function estaVazio() {
        if (searchTitle == "") {
            PromocaoDataService.getAll().then(({ data }) => {
                setPromocoes(data);
            });
        }
    }

    function apangueiAlgo() {
        PromocaoDataService.getAll().then(({ data }) => {
            setPromocoes(data);
        });
    }

    function deletePromocao(id) {
        PromocaoDataService.remove(id).then(({ data }) => {
            console.log(data);
            apangueiAlgo();
        });
    }

    function deleteAllPromocoes() {
        if (
            window.confirm("Tem certeza que deseja deletar todos as promoções?")
        )
            PromocaoDataService.removeAll().then(({ data }) => {
                console.log(data);
                apangueiAlgo();
            });
    }

    return (
        <div className="list row d-flex justify-content-center">
            <div className="col-md-10">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        /*  value={searchTitle} */
                        onBlur={onChangeSearchTitle}
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
