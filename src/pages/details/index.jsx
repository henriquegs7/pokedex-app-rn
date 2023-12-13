import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getPokemon } from "../../services/pokemon";

// import { Container } from './styles';

export const Details = ({ route }) => {
    const [pokemon, setPokemon] = useState([]);
    const { index } = route.params;

    useEffect(() => {
        const pokemonDetails = async () => {
            try {
                const response = await getPokemon(index + 1);
                setPokemon(response);
            } catch (error) {
                console.log(error || "nao deu certo");
            }
        };

        pokemonDetails();
    }, []);

    return (
        pokemon && (
            <View>
                <View>
                    {/* <Image></Image> */}
                    <View>
                        <View></View>
                        <View>
                            <Text>Sobre</Text>
                            <View>
                                <View>
                                    {/* <Image></Image> */}
                                    <View>
                                        <Text>{pokemon?.weight}</Text>
                                        <Text>Peso</Text>
                                    </View>
                                </View>
                                <View>
                                    {/* <Image></Image> */}
                                    <View>
                                        <Text>{pokemon?.height} m</Text>
                                        <Text>Altura</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text>Habilidades</Text>
                                {pokemon.abilities?.map(({ ability, is_hidden }) => is_hidden && <Text>{ability.name}</Text>)}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    );
};
