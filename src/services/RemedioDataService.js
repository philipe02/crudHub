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
    var filtradoNome = REMEDIOS.filter( //filtra os objetos de REMEDIOS
        (obj) => obj.nome.toUpperCase().includes(filtro) ); //juntas os objetos filtrados em um array
    var filtradoSub = REMEDIOS.filter( //filtra os objetos de REMEDIOS
        (obj) => obj.substancia.toUpperCase().includes(filtro) ); //juntas os objetos filtrados em um array
    var filtrados= filtradoNome.concat(filtradoSub)
    return filtrados
};
const removeAll = () => {
    REMEDIOS=[]
  };
const remove = (key) => {
  REMEDIOS = REMEDIOS.filter((obj)=>{
    return obj.nome!==key
  })
};
const update = (key, data) => {
    REMEDIOS.forEach(function(item) {
      if (item.nome === key){
        item.nome = data.nome
        item.utilidade = data.utilidade
        item.substancia = data.substancia
        item.receita = data.receita
        item.gramas = data.gramas
        item.laboratorio = data.laboratorio
        item.preco = data.preco
      }
    });    
    return 
};

const create = (data) => { //bota a novo objeto
    return REMEDIOS.push(data);
  };
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