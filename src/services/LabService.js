let Remedy = [
    {
      id:1,
      title: "Paracetamol", 
      estoque: "Disponivel", 
      laboratorio: "Bifarma ",
      published: "Published"},

    {
      id:2,
    title: "Dorflex", 
    estoque: "Disponivel",
    laboratorio: "Sanofi Aventis" ,
    published: "Published"
    },

    {
      id:3,
      title: "Dipirona",
       estoque: "Disponivel", 
       laboratorio: "Sanofi Aventis",
        published: "Published"
    },

    {
      id:4,
      title: "Dramin",
       estoque: "Indisponivel",
       laboratorio: "Takeda Pharma Ltda" ,
       published: "Published"
    },

   {
     id:5,
     title: "Loratadina", 
     estoque: "Disponivel", 
     laboratorio: "Aché Laboratórios Farmacêuticos S.A." ,
     published: "Published"
   }
]
  
const remove = (ident) => {
  
  Remedy = Remedy.filter((id)=>{
      return id.id !== ident 
  })
  
   
};
  

  const update = (key, data) => {
    
    Remedy.forEach(function(item) {
      if (item.title === key){
        item.title = data.title;
        item.estoque = data.estoque;
        item.laboratorio = data.laboratorio;
        item.published = data.published;
      }
    });
    return 
  };
  
  
  const getAll = () => {
    return Remedy;
  };
  
  const getById = (id) => {
    let filtro = id.toLowerCase()
    let filtrado = Remedy.filter((obj)=>{
      return obj.title.toLowerCase().includes(filtro);
      })
    return filtrado;
    
  };

  const removeAll = () => {
     Remedy =[]
  };
  const createe = (data) => {
    data = {
      id: Remedy[Remedy.length - 1].id + 1,
      ...data,
  };
  Remedy.push(data);
  return data;
  };
  const filterByName = (title) => {
    if (title === "") return Remedy;
    var filtrado = Remedy.filter((obj) =>
        obj.title.toLowerCase().includes(title.toLowerCase())
    ); // retorna os objs que contém
    return filtrado;
};
  
  
  export default {getAll,getById,remove,removeAll,update,createe,filterByName};