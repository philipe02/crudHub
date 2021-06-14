
import { useState } from "react";
import LabService from "../../services/LabServiceRest";
import {Link } from "react-router-dom";

const AddLab = () => {

 const InicialLabState = {
     title: "",
     estoque:"",
     laboratorio: "",
     published: false,
     
 }
 

 const [InicialLab, setInicialLab] = useState(InicialLabState);
 const [submitted, setSubmitted] = useState(false);
 

 const handleInputchange = (event) => {

     const {name, value} = event.target;
     setInicialLab({...InicialLab, [name]: value});

 }

 
 const saveLab = () => {

     
        LabService.create(InicialLab)

        .then(response => {
            setInicialLab(
             InicialLabState
            )
            setSubmitted(true);
            console.log(response.InicialLab);
          })
          .catch(e => {
            console.log(e);
          });
       
        }
        
 


 const newInicialLab = (e) => {
    
     e.preventDefault()
     setInicialLab(InicialLabState);
     setSubmitted(false);
   
 }


    return (

        <div className=" w-50 p-3  mx-auto">
            <div className="submit-form">
                 {submitted ? (
                    <div className="row">
                        <h4>Cadastro realizado com sucesso!!</h4>
                            <p>Clique em "Voltar" caso queira voltar para a página pirncipal</p>
                            <button className="btn btn-success" onClick={newInicialLab}>
                             Adicionar outra informação?
                            </button>
                            
                            <Link to="/laboratorio">
                                <button type="button" className="btn btn-primary ml-5">
                                    Voltar
                                </button>
                            </Link>
            </div>

         ) : (

            <div>
                    <form onSubmit={saveLab} id="form">
                            <h4>Adicione o laboratório e suas especificações abaixo:</h4>
                            <div className="form-group">
                                        <label htmlFor="description">Laboratorio:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="laboratorio"
                                            required
                                            value={InicialLab.laboratorio}
                                            onChange={handleInputchange}
                                            name="laboratorio"
                                        />
                                </div>
                               

                                <div className="form-group">

                                        <label htmlFor="description">Estoque:</label>
                                        
                                        <select 
                                        id="estoque"
                                        name="estoque"
                                        className="form-control custom-select"
                                        value={InicialLab.estoque}
                                        onChange={handleInputchange} 
                                        required
                                        >
                                          <option >Indisponivel</option>
                                          <option >Disponivel</option>
                                          
                                        </select>

                                </div>

                                       
                                <div className="form-group">
                                        <label htmlFor="title">Remédio:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            required
                                            value={InicialLab.title}
                                            onChange={handleInputchange}
                                            name="title"
                                        />
                                </div>

                                <button 
                                    type="submit" 
                                    form="form"
                                    onClick={(evento)=>{evento.preventDefault();saveLab()} }
                                    className="btn btn-success">Adicionar
                            </button>  

                        </form>
                        
                    </div>
                    )}
            </div>
      </div>
    );
    
};
export default AddLab;