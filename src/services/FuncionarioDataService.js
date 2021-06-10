import http from "../http-common";

const getAll = () => {
    return http.funcionarios.get("/funcionarios");
};

const getById = (id) => {
    return http.funcionarios.get(`/funcionarios/${id}`);
};
const filterByName = (name) => {
    return http.funcionarios.get(`/funcionarios?name=${name}`);
};
const remove = (id) => {
    return http.funcionarios.delete(`/funcionarios/${id}`);
};
const create = (funcionario) => {
    return http.funcionarios.post("/funcionarios", funcionario);
};
const update = (funcionario) => {
    return http.funcionarios.put(
        `/funcionarios/${funcionario.id}`,
        funcionario
    );
};
const removeAll = () => {
    return http.funcionarios.delete("/funcionarios");
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
