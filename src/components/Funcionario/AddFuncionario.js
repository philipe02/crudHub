import { lavenderblush } from "color-name";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FuncionarioDataService from "../../services/FuncionarioDataService";

const AddFuncionario = (props) => {
    const initialState = {
        name: "",
        role: "",
        salary: "",
    };
    const [funcionario, setFuncionario] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    function novoFuncionario() {
        setFuncionario(initialState);
        setSubmitted(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFuncionario({ ...funcionario, [name]: value });
    }

    function handleSubmit(e) {
        FuncionarioDataService.create(funcionario);
        setSubmitted(true);
        console.log(FuncionarioDataService.getAll());
        props.atualizarLista();
    }

    return (
        <div
            class="modal fade"
            id="addFuncModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addFuncModal"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Adicionar funcionário</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        {submitted ? (
                            <>
                                <h4>Funcionário adicionado</h4>
                            </>
                        ) : (
                            <form
                                id="addFuncForm"
                                onSubmit={handleSubmit}
                                className="w-75 mb-4"
                            >
                                <label className="mt-2">Nome</label>
                                <input
                                    id="input-name"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o nome"
                                    value={funcionario.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="mt-2">Cargo</label>
                                <select
                                    id="select-role"
                                    name="role"
                                    className="form-control"
                                    value={funcionario.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option defaultValue value="">
                                        Selecione o cargo
                                    </option>
                                    <option value="Atendente">Atendente</option>
                                    <option value="Farmacêutico">
                                        Farmacêutico
                                    </option>
                                    <option value="Segurança">Segurança</option>
                                    <option value="Gerente">Gerente</option>
                                </select>
                                <label className="mt-2">Salário</label>
                                <input
                                    id="input-salary"
                                    name="salary"
                                    type="number"
                                    className="form-control"
                                    placeholder="Insira o salário"
                                    value={funcionario.salary}
                                    onChange={handleChange}
                                    required
                                />
                            </form>
                        )}
                    </div>
                    <div class="modal-footer">
                        {submitted ? (
                            <button
                                className="btn btn-primary"
                                onClick={novoFuncionario}
                            >
                                Adicionar
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="btn btn-primary"
                                form="addFuncForm"
                            >
                                Adicionar
                            </button>
                        )}
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddFuncionario;
