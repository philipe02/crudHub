import {useState,useEffect} from"react";
import "bootstrap/dist/css/bootstrap.min.css";
import LabService from "../../services/LabServiceRest";
import {Link } from "react-router-dom";

//import { Link } from "react-router-dom";


const LabList = () => {

    const [seachRemedy, setSeachRemedy] = useState("");
    const [labs, setLabs] = useState([]); // envia o response para labs
    

   
    const onChangeSearchRemedy = (e) =>{ // Informação do campo search by title

       setSeachRemedy ( e.target.value)
       
        

        
    }
    useEffect(() => {
     LabService.filterByName(seachRemedy)
     .then(response =>{
        setLabs(response.data)
       }
     )
    },[seachRemedy])

    useEffect(() => {
      apiLab();
    }, []);

    const apiLab = () => { // consulta todos os dados do mock
      console.log("to aqui")
      LabService.getAll()
        .then(response => {
          setLabs(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };

    const deleteTutorial = (Id) => {

      if (window.confirm('Deseja excluir?')){
        LabService.remove(Id)// função criada no LabService 
        .then(response => {
          console.log(response.data);
          apiLab();
        })
        .catch(e => {
          console.log(e);
        });
       
      }
    }

    /*const findByRemedy = () => {

      setLabs(LabService.getById(seachRemedy)) // função criada no LabService 
      .then(response => {
        setSeachRemedy(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }*/

  const removeAllRemedy = () => {

    if (window.confirm('Tem certeza que deseja deletar todos remédios?')){
      LabService.removeAll()
      .then(response => {
        console.log(response.data);
        apiLab();
      })
      .catch(e => {
        console.log(e);
      });
    }

  };

    return (

                  <div className="list row">
                      <div className="col-md-10">
                          <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search by title"
                                value={seachRemedy}
                                onChange={onChangeSearchRemedy}
                              />
                            <div className="input-group-append">
                             
                            </div>
                        </div>
                    </div>
                  

                    <div className="col-md-10 ">
                      <h4>Lista de Laboratórios:</h4>
                      <Link to="/laboratorio/add">
                    <button type="button" className="btn btn-primary m-2 d-flex justify-content-center mx-auto">
                        Adicionar Laboratorio
                    </button>
                </Link>
                            <table className="table">
                                    <thead className="thead-dark">
                                      <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Laboratorio</th>
                                        <th scope="col">Estoque</th>
                                        <th scope="col">Remédio</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        
                                      </tr>
                                    </thead>

                                    <tbody>
                                      { 
                                      labs && labs.map((labs, index) => (
                                        <tr >
                                          <th scope="row">{labs.id}</th>
                                          <td>{labs.laboratorio}</td>
                                          <td>{labs.estoque}</td>
                                          <td>{labs.title}</td>
                                          <td > 

                                            <Link to={"/laboratorio/" + labs.id} className="badge badge-warning ">Editar</Link>

                                          </td>
                                          <td> 

                                            <Link onClick={() => deleteTutorial(labs.id)} className="badge badge-danger">Remove</Link>

                                          </td>
                                          
                                        
                                        
                                        </tr>
                                      ))
                                      }
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
