import React, { useEffect, useState } from "react";
import PromocaoDataService from "../../services/PromocaoDataService";
import { Link } from "react-router-dom";

const Promocao = (props) => {
    const initialState = {
        id: null,
        name: "",
        description: "",
        discount: 0,
        datainicio: "",
        datafim: "",
    };

    const [promocao, setPromocao] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        PromocaoDataService.getById(props.match.params.id).then(({ data }) => {
            setPromocao(data);
        });
    }, []);

    function novaEdicao() {
        PromocaoDataService.getById(promocao.id).then(({ data }) => {
            setPromocao(data);
            setSubmitted(false);
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setPromocao({ ...promocao, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        PromocaoDataService.update(promocao).then(({ data }) => {
            setPromocao(data);
        });
        setSubmitted(true);
    }

    return (
        <div className="col-md-10 d-flex justify-content-center mx-auto">
            {submitted ? (
                <div>
                    <h4>Promoção Editada</h4>
                    <div className="d-flex justify-content-around">
                        <button
                            className="btn btn-warning"
                            onClick={novaEdicao}
                        >
                            Editar
                        </button>
                        <Link to={"/promocao"}>
                            <button className="btn btn-secondary">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="w-50">
                    <label className="mt-2">Nome da promoção</label>
                    <input
                        id="input-name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Qual o nome da promoção?"
                        value={promocao.name}
                        onChange={handleChange}
                        required
                    />
                    <label className="mt-2">Descrição da promoção</label>
                    <input
                        id="input-description"
                        name="description"
                        type="text"
                        className="form-control"
                        placeholder="Qual a descrição da promoção?"
                        value={promocao.description}
                        onChange={handleChange}
                        required
                    />
                    <label className="mt-2">Porcentagem do Desconto</label>
                    <input
                        id="input-discount"
                        name="discount"
                        type="number"
                        className="form-control"
                        placeholder="Insira o desconto"
                        value={promocao.discount}
                        onChange={handleChange}
                        required
                    />
                    <label className="mt-2">Data Inicial da Promoção</label>
                    <input
                        id="input-datainicial"
                        name="datainicio"
                        class="form-control"
                        type="date"
                        value={promocao.datainicio}
                        onChange={handleChange}
                    ></input>
                    <label className="mt-2">Data Final da Promoção</label>
                    <input
                        id="input-datafinal"
                        name="datafim"
                        class="form-control"
                        type="date"
                        value={promocao.datafim}
                        onChange={handleChange}
                    ></input>
                    <button
                        onClick={handleSubmit}
                        className="form-control btn-primary my-3"
                    >
                        Adicionar
                    </button>
                </form>
            )}
        </div>
    );
};
export default Promocao;
