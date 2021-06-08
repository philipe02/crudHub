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
        console.log(props.match.params);
        const data = PromocaoDataService.getById(props.match.params.id);
        console.log(data);
        setPromocao(data);
    }, []);

    function novaEdicao() {
        const data = PromocaoDataService.getById(promocao.id);
        setPromocao(data);
        setSubmitted(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setPromocao({ ...promocao, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        PromocaoDataService.update(promocao);
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
                    <label className="mt-2">Promoção</label>
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
                    <label className="mt-2">Data Inicial da Promoção</label>
                    <input
                        id="input-datainicial"
                        class="form-control"
                        type="date"
                        value={promocao.datainicio}
                    ></input>
                    <label className="mt-2">Data Final da Promoção</label>
                    <input
                        id="input-datafinal"
                        class="form-control"
                        type="date"
                        value={promocao.datafim}
                    ></input>
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
export default Promocao;
