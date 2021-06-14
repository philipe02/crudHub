import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemedioDataService from "../../services/RemedioDataServiceRest";
const RemedioList = () => {
    const [pesquisa, setPesquisa] = useState("");
    const [remedios, setRemedios] = useState();
    const onChangePesquisa = (e) => {
        // captura o filtro e coloca ele no filtro
        const Pesquisa = e.target.value;
        setPesquisa(Pesquisa);
    };
    useEffect(() => {
        //pega a lista da api e bota em remedios
        AtualizaLista();
    }, []);
    const AtualizaLista = () => {
        RemedioDataService.getAll()
            .then((response) => {
                setRemedios(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(
        // toda fez que muda o input de pesquisa ele pedi pra filtar
        () => {
            findByTitle();
        },
        [pesquisa]
    );
    const findByTitle = () => {
        //chama dataService para fazer a procura
        return RemedioDataService.getName(pesquisa)
            .then((response) => {
                setRemedios(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const findBySub = () => {
        return RemedioDataService.getSubstancia(pesquisa)
            .then((response) => {
                setRemedios(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const deleteRemedio = (id) => {
        if (window.confirm("Deseja excluir o " + id + "?")) {
            RemedioDataService.remove(id)
                .then((response) => {
                    AtualizaLista();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    const removeAllRemedios = () => {
        // if (window.confirm('Deseja excluir todos os remedios da lista?')){
        //     RemedioDataService.removeAll()
        //     setRemedios(RemedioDataService.getAll())
        //   }
    };
    return (
        <div className="list row">
            <div className="col-md-10">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        onChange={onChangePesquisa} // chama a função que bota valor em Pesquisa
                    />
                </div>
            </div>
            <div className="col-md-10">
                <h4>Lista Remedios</h4>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">nome</th>
                            <th scope="col">substancia</th>
                            <th scope="col">laboratorio</th>
                            <th scope="col">preço</th>
                            <th scope="col">receita</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {remedios != null && //vê se remedio nao é null
                            remedios.map(
                                (
                                    remedio,
                                    index //para cada item da lista vai ter uma seção na tabela
                                ) => (
                                    <tr>
                                        <th scope="row">{remedio.id}</th>
                                        <td>{remedio.nome}</td>
                                        <td>{remedio.substancia}</td>
                                        <td>{remedio.laboratorio}</td>
                                        <td>{remedio.preco}</td>
                                        <td>
                                            {remedio.receita ? "true" : "false"}
                                        </td>
                                        <td>
                                            {" "}
                                            <Link
                                                to={"/remedios/" + remedio.id} //cria um botão de manda para remedio(tela de editar) do produto
                                                className="m-3 btn btn-sm btn-warning"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                        <td>
                                            {" "}
                                            <Link
                                                onClick={() =>
                                                    deleteRemedio(remedio.id)
                                                } //cria botão chama a função de remover
                                                className="m-3 btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            )}
                    </tbody>
                </table>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllRemedios}
                >
                    Remove All
                </button>
            </div>
        </div>
    );
};
export default RemedioList;
