import axios from "axios";
export default axios.create({
    baseURL: "https://60bfbc0697295a0017c43b81.mockapi.io/funcionarios",
    headers: {
        "Content-type": "application/json",
    },
});
