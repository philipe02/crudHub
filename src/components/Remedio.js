import React, { useState, useEffect } from "react";
import RemedioDataService from "../services/RemedioDataServiceRest";
import { Link } from "react-router-dom";

const Remedio = props => {
  const initialRemedioState = {
    id: null,
    nome: "",
    utilidade:"",
    substancia:"",
    receita: false,
    gramas:null,
    laboratorio:"",
    preco:null,
  };
  const [message, setMessage] = useState("");
  const [currentRemedio, setCurrentRemedio] = useState(initialRemedioState);
  useEffect(()=>{
    getRemedios(props.match.params.id)

  }, [props.match.params.id])//O [] faz com que o useEffect seja chamado quando carrega a tela
  const getRemedios=(key)=>{
    RemedioDataService.getId(key)      
    .then(response => {
      setCurrentRemedio(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }
  const box =()=>{
    setCurrentRemedio({...currentRemedio,["receita"]:!currentRemedio.receita})
  }
  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentRemedio({ ...currentRemedio, [name]: value });
  };

  const updateRemedio = () => {
    RemedioDataService.update(currentRemedio.id, currentRemedio).then(
      response=>{
        setCurrentRemedio(response.data)
        props.history.push("/");
      }
    );
  };

  return (
    <div>
      {currentRemedio ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
            <form>
            <div className="form-group">
            <label htmlFor="title">Nome</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={currentRemedio.nome}
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
              value={currentRemedio.substancia}
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
              value={currentRemedio.laboratorio}
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
              value={currentRemedio.utilidade}
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
              value={currentRemedio.preco}
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
              value={currentRemedio.gramas}
              onChange={handleInputChange}
              name="gramas" // assim que ele pega a propriedade
            />
          </div>
          <div class="mb-3 form-check">
          {currentRemedio.receita ? <input
              type="checkbox"
              className="form-check-input"
              id="receita"
              required
              onChange={()=>box()}
              value={currentRemedio.receita}
              name="receita" // assim que ele pega a propriedade
                checked/> : <input
                type="checkbox"
                className="form-check-input"
                id="receita"
                required
                onChange={()=>box()}
                value={currentRemedio.receita}
                name="receita" // assim que ele pega a propriedade
                />
                }
                <label class="form-check-label" for="receita">Receita necessária</label>
            </div>
            </form>
          
            <button
              type="submit"
              className="m-3 btn btn-sm btn-success"
              onClick={updateRemedio}
            >
              Update
            </button>
         
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Remedio;

