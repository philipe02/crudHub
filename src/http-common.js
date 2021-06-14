import axios from "axios";
<<<<<<< HEAD

export default axios.create({
  baseURL: "https://60c0016fb8d36700175540df.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});
=======
const funcionarios = axios.create({
    baseURL: "https://60bfbc0697295a0017c43b81.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

const remedios = axios.create({
    baseURL: "",
    headers: {
        "Content-type": "application/json",
    },
});

const promocoes = axios.create({
    baseURL: "https://60bfbc0697295a0017c43b81.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

const laboratorios = axios.create({
    baseURL: "",
    headers: {
        "Content-type": "application/json",
    },
});

const clientes = axios.create({
    baseURL: "",
    headers: {
        "Content-type": "application/json",
    },
});

export default { funcionarios, remedios, promocoes, laboratorios, clientes };
>>>>>>> fc8987c92a541c05a0d3be82a0913580625b148d
