<<<<<<< HEAD
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
=======
import http from "../http-common";
>>>>>>> 96eeb62d8338b06cd6bcbe39de92cdc6fd50a0e0

const getAll = () => {
    return http.promocoes.get("promocao");
};

const getById = (id) => {
    return http.promocoes.get("promocao/" + id);
};

const filterByName = (name) => {
    return http.promocoes.get("promocao/?name=" + name);
};

const remove = (id) => {
    return http.promocoes.delete("promocao/" + id);
};

const create = (promocao) => {
    return http.promocoes.post("promocao/", promocao);
};

const update = (promocao) => {
    return http.promocoes.put("promocao/" + promocao.id, promocao);
};

const removeAll = () => {
    return http.promocoes.delete("promocao/");
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
