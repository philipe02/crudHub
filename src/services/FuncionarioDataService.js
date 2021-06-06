let FUNCIONARIOS = [
    { id: 1, name: "Jão", role: "Atendente", salary: 1000 },
    { id: 2, name: "Mariah", role: "Farmacêutico", salary: 3000 },
];

const getAll = () => {
    return FUNCIONARIOS;
};

const getById = (id) => {
    if (id === "") return FUNCIONARIOS;
    //var filtrado = PRODUCTS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
    //var filtrado = PRODUCTS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
    var filtrado = FUNCIONARIOS.filter((obj) => obj.id === id); // retorna os objs que contém
    return filtrado;
};

export default {
    getAll,
    getById,
};
