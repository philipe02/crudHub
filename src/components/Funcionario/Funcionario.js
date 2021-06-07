import React, { useEffect, useState } from "react";
import FuncionarioDataService from "../../services/FuncionarioDataService";
import { Link } from "react-router-dom";

const Funcionario = (props) => {
    const initialState = {
        id: null,
        name: "",
        role: "",
        salary: "",
    };

    const [funcionario, setFuncionario] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        console.log(props.match.params);
        const data = FuncionarioDataService.getById(props.match.params.id);
        console.log(data);
        setFuncionario(data);
    }, []);

    function novaEdicao() {
        const data = FuncionarioDataService.getById(funcionario.id);
        setFuncionario(data);
        setSubmitted(false);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFuncionario({ ...funcionario, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        FuncionarioDataService.update(funcionario);
        setSubmitted(true);
    }

    return (
        <div className="col-md-10 d-flex justify-content-center mx-auto">
            {submitted ? (
                <div>
                    <h4>Funcionário editado</h4>
                    <div className="d-flex justify-content-around">
                        <button
                            className="btn btn-warning"
                            onClick={novaEdicao}
                        >
                            Editar
                        </button>
                        <Link to={"/funcionario"}>
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
                        <option value="Farmacêutico">Farmacêutico</option>
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
export default Funcionario;
