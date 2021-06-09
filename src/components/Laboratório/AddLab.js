
import { useState } from "react";
import LabService from "../../services/LabService";
const AddLab = () => {

 const InicialLabState = {
     title: "",
     estoque:"",
     laboratorio: "",
     published: false,
     
 }
 

 const [InicialLab, setInicialLab] = useState(InicialLabState);
 const [submitted, setSubmitted] = useState(false);
 console.log(InicialLab)

 const handleInputchange = (event) => {

     const {name, value} = event.target;
     setInicialLab({...InicialLab, [name]: value});

 }


 const saveLab = () => {

     var data = {
         title:InicialLab.title,
         estoque:InicialLab.estoque,
         laboratorio:InicialLab.laboratorio,
         published:false
        
        }
        LabService.createe(data);
        setSubmitted(true);
        console.log(LabService.getAll());
       
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
                            <button className="btn btn-primary ml-5" >
                             Voltar
                            </button>
                            
            </div>

         ) : (

            <div>
                    <form onSubmit={saveLab}>
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="estoque"
                                            required
                                            value={InicialLab.estoque}
                                            onChange={handleInputchange}
                                            name="estoque"
                                        />

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
                                    onClick={saveLab}
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