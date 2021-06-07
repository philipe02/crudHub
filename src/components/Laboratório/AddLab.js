
import { useState } from "react";
import LabService from "../../Services/LabService";
const AddLab = () => {

 const inicialLabState = {
     title: "",
     estoque:"",
     laboratorio: "",
     published: false,
     
 }
 

 const [InicialLab, setInicialLab] = useState(inicialLabState);
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
 


 const newInicialLab = () => {
     setInicialLab(inicialLabState);
     setSubmitted(false);
   
 }


    return (

        <div className=" w-50 p-3  mx-auto">
            <div className="submit-form">
                 {submitted ? (
                    <div>
                        <h4>Cadastro realizado com sucesso</h4>
                        <button className="btn btn-success" onClick={newInicialLab}>
                        Adicionar outra informação?
                        </button>
            </div>

         ) : (

            <div>
                    <form onSubmit={saveLab}>

                                <div className="form-group">
                                        <label htmlFor="title">Title</label>
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

                                <div className="form-group">

                                        <label htmlFor="description">Estoque</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="description"
                                            required
                                            value={InicialLab.estoque}
                                            onChange={handleInputchange}
                                            name="estoque"
                                        />

                                </div>

                                        <div className="form-group">
                                        <label htmlFor="description">Laboratorio</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="description"
                                            required
                                            value={InicialLab.laboratorio}
                                            onChange={handleInputchange}
                                            name="laboratorio"
                                        />
                                </div>

                            <button 
                                    type="submit" 
                                    onClick={saveLab}
                                    className="btn btn-success">Submit
                            </button>  

                        </form>
                    </div>
                    )}
            </div>
      </div>
    );
    
};
export default AddLab;