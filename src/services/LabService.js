let Remedy = [
    {"title": "Paracetamol", "estoque": "Disponivel", "laboratorio": "Bifarma ","published": "Published"},
    {"title": "Dorflex", "estoque": "Disponivel","laboratorio": "Sanofi Aventis" ,"published": "Published"},
    {"title": "Dipirona", "estoque": "Disponivel", "laboratorio": "Sanofi Aventis", "published": "Published"},
    {"title": "Dramin", "estoque": "Indisponivel","laboratorio": "Takeda Pharma Ltda" ,"published": "Published"},
    {"title": "Loratadina", "estoque": "Disponivel", "laboratorio": "Aché Laboratórios Farmacêuticos S.A." ,"published": "Published"}
  ]

  const remove = (id) => {
   Remedy = Remedy.filter((title)=>{
      return title.title !== id 
  })
  }

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
    return Remedy.push(data);
  };
  
  
  export default {getAll,getById,remove,removeAll,update,createe};