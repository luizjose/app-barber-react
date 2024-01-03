import styled from "styled-components/native";

export const StarArea = styled.View`
flex-direction: row;
align-items: center;
`;
export const StarView = styled.View``;
export const StarText = styled.Text`
    font-size: 13px;
    font-weight: bold;
    margin-left: 5px;
    color: ${({theme})=> theme.COLORS.GRAY_300};
`;