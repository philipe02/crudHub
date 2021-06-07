let REMEDIOS=[
    {id: 1,nome:"",utilidade:"",principioAtivio:"",receita:true,gramas:50,laboratorio:"",preco:20,}
]
const getAll = () => {
    return REMEDIOS;
  };
const getById = (title) => {
    if (title === "") {return REMEDIOS}
    var filtrado = REMEDIOS.filter( //filtra os objetos de REMEDIOS
        (obj) => obj.nome.includes(title) ); //juntas os objetos filtrados em um array
    if (filtrado==="") {
        filtrado = REMEDIOS.filter( //filtra os objetos de REMEDIOS
            (obj) => obj.principioAtivio.includes(title) ); //juntas os objetos filtrados em um array
    }
    return filtrado
};
const removeAll = () => {
    REMEDIOS=[]
  };
const remove = (key) => {
    return REMEDIOS.splice(REMEDIOS.indexOf(key), 1);
};

const create = (data) => { //bota a novo objeto
    return REMEDIOS.push(data);
  };
  
const update = () => {};
const geradorDeId=()=>{
    return REMEDIOS.length + 1
}
export default {
    getAll,
    create,
    update,
    remove,
    removeAll,
    getById,
    geradorDeId
  };