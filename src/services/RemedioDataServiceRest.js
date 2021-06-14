import http from "../http-common";

const getAll = () =>{ //pega todos os elementos
    return http.remedios.get(("/remedios"))
}

const getId = (id) =>{ //pega um elemento por id
    return http.remedios.get("/remedios/" + id)
}
const getName = (nome) =>{ //pega elemento por nome
    return http.remedios.get(`/remedios?nome=${nome}`)
}
const getSubstancia = (substancia) =>{ //pega elemento por substancia
    return http.remedios.get(`/remedios?substancia=${substancia}`)
}
const create = (data) =>{ //adiciona dados 
    return http.remedios.post("/remedios", data)
}

const update = (id,data) =>{ //muda dados
    return http.remedios.put(`/remedios/${id}`,data)
}

const remove = (id) =>{
    return http.remedios.delete(`/remedios/${id}`)
}

export default {getAll,getId,create,update,remove,getName,getSubstancia};