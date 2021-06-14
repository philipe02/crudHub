import http from "../http-common";

const getAll = () => {
    return http.laboratorio.get("/laboratorio");
};

const getById = (id) => {
    return http.laboratorio.get(`/laboratorio/${id}`);
};
const filterByName = (name) => {
    return http.laboratorio.get(`/laboratorio?laboratorio=${name}`);
};
const remove = (id) => {
    return http.laboratorio.delete(`/laboratorio/${id}`);
};
const create = (laboratorio) => {
    return http.laboratorio.post("/laboratorio", laboratorio);
};
const update = (id,laboratorio) => {
    return http.laboratorio.put(
        `/laboratorio/${id}`,
        laboratorio
    );
};
const removeAll = () => {
    return http.laboratorio.delete("/laboratorio");
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