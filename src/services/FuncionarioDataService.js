import http from "../http-common";
let FUNCIONARIOS = [
    { id: 1, name: "Jão", role: "Atendente", salary: 1000 },
    { id: 2, name: "Mariah", role: "Farmacêutico", salary: 3000 },
];

const getAll = () => {
    return http.get("/funcionarios");
};

const getById = (id) => {
    return http.get(`/funcionarios/${id}`);
};
const filterByName = (name) => {
    return http.get(`/funcionarios?name=${name}`);
};
const remove = (id) => {
    return http.delete(`/funcionarios/${id}`);
};
const create = (funcionario) => {
    return http.post("/funcionarios", funcionario);
};
const update = (funcionario) => {
    return http.put(`/funcionarios/${funcionario.id}`, funcionario);
};
const removeAll = () => {
    return http.delete("/funcionarios");
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
