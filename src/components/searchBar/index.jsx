import React from "react";
import SearchIcon from "../../images/search.svg";

import { Container, IconContainer, TextInput } from "./styles";

export const SearchBar = ({ searchTerm, onChangeSearchTerm }) => {
    return (
        <Container>
            <IconContainer>
                <SearchIcon width={20} height={20} color="black" /> {/*color={colors.identity.primary} */}
            </IconContainer>
            <TextInput placeholder="Search" value={searchTerm} onChangeText={onChangeSearchTerm} />
        </Container>
    );
};
