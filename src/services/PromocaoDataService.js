import http from "../http-common";

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
