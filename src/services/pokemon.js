import axiosInstance from "./api";

export const getAllPokemons = () => {
    return axiosInstance
        .get("pokemon?limit=100000&offset=0")
        .then((response) => response.data)
        .catch((error) => console.error(error));
};

export const getPokemon = (pokemonId) => {
    return axiosInstance
        .get(`pokemon/${pokemonId}/`)
        .then((response) => response.data)
        .catch((error) => console.error(error));
};
