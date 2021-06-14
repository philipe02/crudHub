import React, { useState } from "react";
import { Link } from "react-router-dom";
import RemedioDataService from "../../services/RemedioDataServiceRest";

const AddRemedio = () => {
    const initialRemedioState = {
        id: null,
        nome: "",
        utilidade: "",
        substancia: "",
        receita: false,
        gramas: null,
        laboratorio: "",
        preco: null,
    };
    const [remedio, setRemedio] = useState(initialRemedioState);
    const [submitted, setSubmitted] = useState(false); //para saber qual tela vai ser usada

    const handleInputChange = (event) => {
        const { name, value } = event.target; // bota a propriedade em name e o valor em value
        setRemedio({ ...remedio, [name]: value }); //nesse caso ele vai acessar remedio e name vai virar uma propriedade do objeto e value é o oq o usario quer adicionar
    };
    const testaReceita = () => {
        let chechbox = document.getElementById("receita");
        if (chechbox.checked) {
            setRemedio((remedio.receita = true));
        } else {
            setRemedio((remedio.receita = false));
        }
    };
    const saveremedio = () => {
        testaReceita();
        RemedioDataService.create(remedio)
            .then((response) => {
                setRemedio({
                    id: response.data.id,
                    nome: response.data.nome,
                    utilidade: response.data.utilidade,
                    substancia: response.data.substancia,
                    laboratorio: response.data.laboratorio,
                    receita: response.data.receita,
                    gramas: response.data.gramas,
                    preco: response.data.preco,
                });
                setSubmitted(true); //exibe a tela que deu certo
            })
            .catch((e) => {
                console.log(e);
            }); //manda para dados para inserir na lista
    };

    const newremedio = () => {
        //reseta a tela
        setRemedio(initialRemedioState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? ( //se submitted for true exiba essa tela
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newremedio}>
                        {" "}
                        {/* volta a tela para add mais */}
                        more one
                    </button>
                    <Link to={"/"}>
                        {" "}
                        {/* manda de volta para a tela de lista */}
                        <button
                            className="btn btn-success"
                            onClick={newremedio}
                        >
                            lista
                        </button>
                    </Link>
                </div>
            ) : (
                //se submitted for false exiba e formulario
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={remedio.nome}
                            onChange={handleInputChange}
                            name="nome" // assim que ele pega a propriedade
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="substancia">Substancia</label>
                        <input
                            type="text"
                            className="form-control"
                            id="substancia"
                            required
                            value={remedio.substancia}
                            onChange={handleInputChange}
                            name="substancia" // assim que ele pega a propriedade
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="laboratorio">Laboratorio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="laboratorio"
                            required
                            value={remedio.laboratorio}
                            onChange={handleInputChange}
                            name="laboratorio" // assim que ele pega a propriedade
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="utilidade">Utilidade</label>
                        <input
                            type="text"
                            className="form-control"
                            id="utilidade"
                            required
                            value={remedio.utilidade}
                            onChange={handleInputChange}
                            name="utilidade" // assim que ele pega a propriedade
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preco">Preço</label>
                        <input
                            type="text"
                            className="form-control"
                            id="preco"
                            required
                            value={remedio.preco}
                            onChange={handleInputChange}
                            name="preco" // assim que ele pega a propriedade
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gramas">Gramas</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gramas"
                            required
                            value={remedio.gramas}
                            onChange={handleInputChange}
                            name="gramas" // assim que ele pega a propriedade
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="receita"
                            required
                            value={remedio.receita}
                            name="receita" // assim que ele pega a propriedade
                        />
                        <label class="form-check-label" for="exampleCheck1">
                            Receita necessária
                        </label>
                    </div>
                    <button onClick={saveremedio} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};
export default AddRemedio;
