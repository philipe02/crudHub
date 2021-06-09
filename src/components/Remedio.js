import React, { useState, useEffect } from "react";
import RemedioDataService from "../services/RemedioDataService";
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
  const [box, setBox] = useState(true);
  const [message, setMessage] = useState("");
  const [currentRemedio, setCurrentRemedio] = useState(initialRemedioState);
  const [key, setKey] = useState(props.match.params.id) //pega o kay pela pagina
  useEffect(()=>{
    const data = RemedioDataService.getById(key)
    setCurrentRemedio(data[0])
    console.log(data[0]);
    console.log(currentRemedio);
  }, [])//O [] faz com que o useEffect seja chamado quando carrega a tela
  useEffect(()=>{
    console.log(currentRemedio.receita);
    console.log("entrei");
  },[setCurrentRemedio])
  const testaReceita = () =>{
    let chechbox=document.getElementById('receita')
    console.log("entrei");
    if (chechbox.checked) {
        setCurrentRemedio(currentRemedio.receita=true)
    }
    else{
        setCurrentRemedio(currentRemedio.receita=false)
    }
  }
  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentRemedio({ ...currentRemedio, [name]: value });
  };

  const updateRemedio = () => {
    testaReceita()
    RemedioDataService.update(key, currentRemedio);
    setCurrentRemedio(currentRemedio)
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
          {box ? <input
              type="checkbox"
              className="form-check-input"
              id="receita"
              required
              value={currentRemedio.receita}
              name="receita" // assim que ele pega a propriedade
                checked/> : <input
                type="checkbox"
                className="form-check-input"
                id="receita"
                required
                value={currentRemedio.receita}
                name="receita" // assim que ele pega a propriedade
                />
                }
                <label class="form-check-label" for="receita">Receita necessária</label>
            </div>
            </form>
          <Link to="/">
            <button
              type="submit"
              className="m-3 btn btn-sm btn-success"
              onClick={updateRemedio}
            >
              Update
            </button>
          </Link>
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

