import {useState} from"react";
import "bootstrap/dist/css/bootstrap.min.css";

import LabService from "../../Services/LabService";
import {Link } from "react-router-dom";

//import { Link } from "react-router-dom";


const LabList = () => {

    const [seachRemedy, setSeachRemedy] = useState("");
    const [labs, setLabs] = useState(LabService.getAll());
    

   
    const onChangeSearchRemedy = (e) =>{ // Informação do campo search by title
        const inputRemedy = e.target.value;
        setSeachRemedy(inputRemedy)
        
    }
    const deleteTutorial = (Id) => {
      if (window.confirm('Deseja excluir?')){
        LabService.remove(Id); // função criada no LabService 
        
      }
    }

    const findByRemedy = () => {
      setLabs(LabService.getById(seachRemedy)); // função criada no LabService 
  }
  const removeAllRemedy = () => {
    if (window.confirm('Deseja excluir?')){
      LabService.removeAll();
      setLabs(LabService.getAll())
    }
  };

  


    return (

    <div className="list row">
      <div className="col-md-10">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search your medicine for information"
            value={seachRemedy}
            onChange={onChangeSearchRemedy}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByRemedy}
            >
              Search
            </button>
          </div>
        </div>
      </div>
     

      <div className="col-md-10 ">
        <h4>Lista de remédio</h4>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Remedio</th>
              <th scope="col">Estoque</th>
              <th scope="col">Laboratorio</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            { 
            labs && labs.map((labs, index) => (
              <tr>
                <th scope="row">{labs.key}</th>
                <td>{labs.title}</td>
                <td>{labs.estoque}</td>
                <td>{labs.laboratorio}</td>
                <td > 

                  <Link to={"/laboratorio/add" + labs.title} className="badge badge-warning ">Editar</Link>

                </td>
                <td> 

                  <Link onClick={() => deleteTutorial(labs.title)} className="badge badge-danger">Remove</Link>

                </td>
                <td> 
                  
                  <Link  className="badge badge-primary">Descrição</Link>

                </td>
               
               
               
              </tr>
            ))}
            </tbody>
          
          </table>
          <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllRemedy}>
          Remove All
        </button>
      </div>
      
        </div>
   
    );
};
export default LabList;
