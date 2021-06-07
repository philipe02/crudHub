import React, { useState } from "react";
import { Link } from "react-router-dom";
import RemedioDataService from "../services/RemedioDataService";
const RemedioList = () => {
    const [pesquisa,setPesquisa] = useState('');
    const [remedios, setRemedios] = useState(RemedioDataService.getAll());
    const onChangePesquisa = e => { // captura o filtro e coloca ele no filtro
        const Pesquisa = e.target.value;
        setPesquisa(Pesquisa);
    };
    const findByTitle = () => { //chama dataService para fazer a procura
        setRemedios(RemedioDataService.getById(pesquisa))
    };
    const deleteRemedio = (id) => {
        RemedioDataService.remove(id)
    }
  
    const removeAllRemedios = () => {
      RemedioDataService.removeAll()
    };
    return (
        <div className="list row">
          <div className="col-md-10">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={pesquisa} //desnecessario, nesse caso
                onChange={onChangePesquisa} // chama a função que bota valor em Pesquisa
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <h4>remedios List</h4>
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
                { 
                    remedios!=null && //vê se remedio nao é null
                    remedios.map((remedio, index) => ( //para cada item da lista vai ter uma seção na tabela
                    <tr>
                        <th scope="row">{remedio.id}</th>
                        <td>{remedio.nome}</td>
                        <td>{remedio.substancia}</td>
                        <td>{remedio.laboratorio}</td>
                        <td>{remedio.preco}</td>
                        <td>{remedio.receita}</td>
                        <td> <Link to={"/remedios/" + remedio.nome} //cria um botão de manda para remedio(tela de editar) do produto
                        className="m-3 btn btn-sm btn-warning">Edit</Link> 
                        </td>
                        <td> <Link onClick={() => deleteRemedio(remedio.nome)} //cria botão chama a função de remover
                        className="m-3 btn btn-sm btn-danger">Remove</Link>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
              </table>
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllRemedios}>
              Remove All
            </button>
          </div>
        </div>
      );
};
export default RemedioList;