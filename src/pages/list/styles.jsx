import styled from "styled-components/native";

export const Container = styled.View`
    margin: 2px 5px;
`;

export const ViewSearch = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ViewList = styled.ScrollView`
    display: grid;
    grid-template-rows: 100px 100px;
    grid-template-columns: 1fr 2fr;
    grid-row-gap: 10px;
    grid-column-gap: 20px;
`;

export const ItemButton = styled.Button`
    grid-row: 1 / 3;
    grid-column: 2 / 3;
`;
