import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAllPokemons } from "../../services/pokemon";
import { SearchBar, Input } from "../../components";

import { Container, ViewSearch, ViewList, ItemButton } from "./styles";

export const List = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const { results, count } = await getAllPokemons();
                setAllPokemons(results);
            } catch (error) {
                console.log(error || "nao deu certo");
            }
        };

        getPokemons();
    }, []);

    const goToDetailsScreen = (index) => {
        navigation.navigate("Details", { index: index });
    };

    return (
        <Container>
            <SearchBar searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} />
            {/* <Button title="DETALHES" onPress={goToDetailsScreen}></Button> */}
            <ViewList>
                {allPokemons.map(({ name, url }, index) => (
                    <ItemButton key={name + index} title={name} onPress={() => goToDetailsScreen(index)} />
                ))}
            </ViewList>
        </Container>
    );
};
