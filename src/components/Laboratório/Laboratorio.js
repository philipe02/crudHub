
import React, { useState, useEffect } from "react";
import LabService from "../../services/LabServiceRest";
import { Link } from "react-router-dom";

const Laboratorio = (props)=> {
  
const LabState = {
   
    id:null,
    title: "",
    estoque:"",
    laboratorio: "",
    published: "Unpublished",
  };
  
  const [currentLab, setCurrentLab] = useState(LabState);
  const [key] = useState(props.match.params.id);
  
  

  useEffect(()=>{
     LabService.getById(key)
    .then(response => {
      setCurrentLab( response.data)
      
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
 
  }, [])
  
  const getTutorial = id => {
    LabService.getById(id)
      .then(response => {
        setCurrentLab(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentLab({ ...currentLab, [name]: value });
  };

  

  const updateTutorial = () => {
    LabService.update(currentLab.id, currentLab)
    .then(response => {
      console.log(response);
      alert("Atualizado com sucesso!")
      props.history.push("/laboratorio") // faz oq o link faz, fora do link "voltar"
    })
    .catch(e => {
      console.log(e);
    });
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

                                    <button
                                      type="submit"
                                      className="badge badge-success"
                                      onClick={updateTutorial}
                                    >
                                      Update
                                    </button>
                               

                       

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
