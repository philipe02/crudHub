let REMEDIOS=[
    {id: 1,nome:"Sporoma",utilidade:"Fungicida",substancia:"Traconazol",receita:true,gramas:100,laboratorio:"Medlay",preco:120,},
    {id: 2,nome:"ddddd",utilidade:"Fungicida",substancia:"8888",receita:false,gramas:100,laboratorio:"Medlay",preco:120,}
]
const getAll = () => {
    return REMEDIOS;
  };
const getById = (title) => {
    let filtro=title.toUpperCase()
    if (filtro === "") {return REMEDIOS}
    var filtrado = REMEDIOS.filter( //filtra os objetos de REMEDIOS
        (obj) => obj.nome.toUpperCase().includes(filtro) ); //juntas os objetos filtrados em um array
    console.log(filtrado);
    if (filtrado.length == 0) {
        filtrado = REMEDIOS.filter( //filtra os objetos de REMEDIOS
            (obj) => obj.substancia.toUpperCase().includes(filtro) ); //juntas os objetos filtrados em um array
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