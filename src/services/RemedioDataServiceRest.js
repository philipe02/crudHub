import http from "../http-common";

const getAll = () =>{ //pega todos os elementos
    return http.get(("/remedios"))
}

const getId = (id) =>{ //pega um elemento por id
    return http.get("/remedios/" + id)
}
const getName = (nome) =>{ //pega elemento por nome
    return http.get(`/remedios?nome=${nome}`)
}
const getSubstancia = (substancia) =>{ //pega elemento por substancia
    return http.get(`/remedios?substancia=${substancia}`)
}
const create = (data) =>{ //adiciona dados 
    return http.post("/remedios", data)
}

const update = (id,data) =>{ //muda dados
    return http.put(`/remedios/${id}`,data)
}

const remove = (id) =>{
    return http.delete(`/remedios/${id}`)
}

export default {getAll,getId,create,update,remove,getName,getSubstancia};