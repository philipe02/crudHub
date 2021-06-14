import { lavenderblush } from "color-name";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PromocaoDataService from "../../services/PromocaoDataService";

const AddPromocao = () => {
    const initialState = {
        name: "",
        description: "",
        discount: "",
        datainicio: "2021-12-23",
        datafim: "2021-12-26",
    };
    const [promocao, setPromocao] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    function novaPromocao() {
        setPromocao(initialState);
        setSubmitted(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setPromocao({ ...promocao, [name]: value });
    }

    function handleSubmit(e) {
        PromocaoDataService.create(promocao).then(({ data }) => {
            setPromocao(data);
        });
        setSubmitted(true);
    }

    return (
        <div className="col-md-10 d-flex justify-content-center mx-auto">
            {submitted ? (
                <div>
                    <h4>Promoção Adicionada</h4>
                    <div className="d-flex justify-content-around">
                        <button
                            className="btn btn-primary"
                            onClick={novaPromocao}
                        >
                            Adicionar
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
                    <label className="mt-2">Nome</label>
                    <input
                        id="input-name-promocao"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Digite o nome"
                        value={promocao.name}
                        onChange={handleChange}
                        required
                    />
                    <label className="mt-2">Descrição</label>
                    <input
                        id="input-description"
                        name="description"
                        type="text"
                        className="form-control"
                        placeholder="Digite a descrição"
                        value={promocao.description}
                        onChange={handleChange}
                        required
                    />
                    <label className="mt-2">Desconto</label>
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
                    <input
                        id="input-dataInicio"
                        name="datainicio"
                        type="date"
                        className="form-control"
                        placeholder="Insira a data inicio da promoção"
                        value={promocao.datainicio}
                        onChange={handleChange}
                        required
                    />
                    <input
                        id="input-dataFim"
                        name="datafim"
                        type="date"
                        className="form-control"
                        placeholder="Insira a data final da promoção"
                        value={promocao.datafim}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="form-control btn-primary my-3"
                    >
                        Adicionar
                    </button>
                </form>
            )}
        </div>
    );
};
export default AddPromocao;
