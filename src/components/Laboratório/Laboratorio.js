
import React, { useState, useEffect } from "react";
import LabService from "../../services/LabService";
import { Link } from "react-router-dom";

const Laboratorio = (props)=> {
  
const LabState = {
    key:null,
    title: "",
    estoque:"",
    laboratorio: "",
    published: "Unpublished",
  };
  
  const [currentLab, setCurrentLab] = useState(LabState);
  const [key] = useState(props.match.params.id);
  
  

  useEffect(()=>{
    const data = LabService.getById(key)
    console.log(key);
    setCurrentLab(data[0])  
     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentLab({ ...currentLab, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      title: currentLab.title,
      estoque: currentLab.estoque,
      laboratorio: currentLab.laboratorio,
      published: status
    };
    LabService.update(key, data);  
    setCurrentLab(data)
  };

  const updateTutorial = () => {
    console.log(currentLab)
    const data = {
        title: currentLab.title,
        estoque: currentLab.estoque,
        laboratorio: currentLab.laboratorio,
      published: currentLab.published
    };  
    LabService.update(key, data);
    setCurrentLab(data)
  };
  const deleteTutorial = () => {
    if (window.confirm('Deseja excluir?')){
      LabService.remove(setCurrentLab.key);// função criada no LabService 
     
     
     
    }
  }

  

  return (

     <div className='bg-light col-md-10 d-flex justify-content-center mx-auto p-3'>
       
                {currentLab ? (
                  
                        <div >
                          <h4>Edite as informações da lista de Laboratorio abaixo:</h4>
                          <br></br>
                            <form >
                                    <div className="form-group">
                                      <label htmlFor="title">Laboratorio:</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="laboratorio"
                                        name="laboratorio"
                                        value={currentLab.laboratorio}
                                        onChange={handleInputChange}
                                        required
                                      />
                                    </div>

                                    <div className="form-group mt-2">
                                      <label htmlFor="description">Estoque:</label>
                                        <select 
                                        id="estoque"
                                        name="estoque"
                                        className="form-control custom-select"
                                        value={currentLab.estoque}
                                        onChange={handleInputChange} 
                                        required
                                        >
                                          <option >Indisponivel</option>
                                          <option >Disponivel</option>
                                          
                                        </select>
                                      
                                    </div>

                                    <div className="form-group">
                                      <label htmlFor="description">Remédio:</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={currentLab.title}
                                        onChange={handleInputChange}
                                      />
                                    </div>

                                    <div className="form-group">
                                      <label>
                                        <strong>Status:</strong>
                                      </label>
                                      {currentLab.published ? "Published" : "Pending"}
                                    </div>

                            </form>

                          {currentLab.published ? (
                                  <button
                                    className="badge badge-primary mr-2"
                                    onClick={() => updatePublished(false)}
                                  >
                                    UnPublish
                                  </button>
                          ) : (
                                  <button
                                    className="badge badge-primary mr-2"
                                  onClick={() => updatePublished(true)}
                                  >
                                    Publish
                                  </button>
                                )}

                                <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
                                  Delete
                                </button>
                               <Link to="/">

                                <button
                                  type="submit"
                                  className="badge badge-success"
                                  onClick={updateTutorial}
                                >
                                  Update
                                </button>
                                </Link>

                       

                        </div>

                      ) : (

                        <div>
                          <br />
                          <p>Para ocorrer a exibição da página, cliquem em "Editar" no laboratorio da lista na HomePage</p>
                        </div>
                      )}
                    </div>
            );
};

export default Laboratorio;
