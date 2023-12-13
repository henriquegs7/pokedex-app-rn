import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 5000, // Tempo limite da requisição em milissegundos
    headers: {
        "Content-Type": "application/json",
        // Outros cabeçalhos personalizados
    },
});

export default axiosInstance;
