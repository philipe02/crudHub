let PROMOCOES = [
    {
        id: 1,
        name: "Natal",
        description: "Promoção de Natal",
        discount: 10,
        datainicio: "2021-12-23",
        datafim: "2021-12-26",
    },
    {
        id: 2,
        name: "Ano Novo",
        description: "Promoção de Ano Novo",
        discount: 10,
        datainicio: "2021-12-30",
        datafim: "2022-01-02",
    },
    {
        id: 3,
        name: "São João",
        description: "Promoção Junina",
        discount: 10,
        datainicio: "2021-06-23",
        datafim: "2021-06-25",
    },
    {
        id: 4,
        name: "Páscoa",
        description: "Promoção De Páscoa",
        discount: 10,
        datainicio: "2021-04-18",
        datafim: "2021-04-18",
    },
];

const getAll = () => {
    return PROMOCOES;
};

const getById = (id) => {
    if (id === "") return PROMOCOES;
    var encontrado = PROMOCOES.find((obj) => obj.id == id); // retorna o obj com o id passado
    return encontrado;
};

const filterByName = (name) => {
    if (name === "") return PROMOCOES;
    var filtrado = PROMOCOES.filter((obj) =>
        obj.name.toLowerCase().includes(name.toLowerCase())
    ); // retorna os objs que contém
    return filtrado;
};

const remove = (id) => {
    return PROMOCOES.splice(PROMOCOES.indexOf(id), 1);
};

const create = (promocao) => {
    promocao = {
        id: PROMOCOES[PROMOCOES.length - 1].id + 1,
        ...promocao,
    };
    console.log(promocao);
    PROMOCOES.push(promocao);
    return promocao;
};

const update = (promocao) => {
    PROMOCOES = PROMOCOES.map((func) =>
        func.id === promocao.id ? promocao : func
    );
};

const removeAll = () => {
    PROMOCOES = [];
};

export default {
    getAll,
    getById,
    filterByName,
    remove,
    create,
    update,
    removeAll,
};
