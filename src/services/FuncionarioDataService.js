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
    var encontrado = FUNCIONARIOS.find((obj) => obj.id == id); // retorna os objs que contém
    return encontrado;
};
const filterByName = (name) => {
    if (name === "") return FUNCIONARIOS;
    //var filtrado = PRODUCTS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
    //var filtrado = PRODUCTS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
    var filtrado = FUNCIONARIOS.filter((obj) =>
        obj.name.toLowerCase().includes(name.toLowerCase())
    ); // retorna os objs que contém
    return filtrado;
};
const remove = (id) => {
    return FUNCIONARIOS.splice(FUNCIONARIOS.indexOf(id), 1);
};
const create = (funcionario) => {
    funcionario = {
        id: FUNCIONARIOS[FUNCIONARIOS.length - 1].id + 1,
        ...funcionario,
    };
    console.log(funcionario);
    FUNCIONARIOS.push(funcionario);
    return funcionario;
};
const update = (funcionario) => {
    FUNCIONARIOS = FUNCIONARIOS.map((func) =>
        func.id === funcionario.id ? funcionario : func
    );
};

export default {
    getAll,
    getById,
    filterByName,
    remove,
    create,
    update,
};
