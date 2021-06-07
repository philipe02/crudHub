let Remedy = [
    {title: 'Paracetamol', estoque: 'Disponivel', laboratorio:"Bifarma ",published: 'Published'},
    {title: 'Dorflex', estoque: 'Disponivel',laboratorio:"Sanofi Aventis" ,published: 'Published'},
    {title: 'Dipirona', estoque: 'Disponivel', laboratorio:"Sanofi Aventis", published: 'Published'},
    {title: 'Dramin', estoque: 'Indisponivel',laboratorio:"Takeda Pharma Ltda" ,published: 'Published'},
    {title: 'Loratadina', estoque: 'Disponivel', laboratorio:"Aché Laboratórios Farmacêuticos S.A." ,published: 'Published'}
  ]

  const remove = (key) => {
    return Remedy.splice(Remedy.indexOf(key), 1);
  };
  
  
  const getAll = () => {
    return Remedy;
  };
  
  const getById = (title) => {
    if (title === "") return Remedy
    
    var filtrado = Remedy.filter((obj) => obj.title.includes(title) ); // retorna os objs que contém title
    return filtrado
    
  };

  const removeAll = () => {
     Remedy =[]
  };
  const createe = (data) => {
    return Remedy.push(data);
  };
  
  export default {getAll,getById,remove,removeAll,createe};