import styled from "styled-components/native";
export const TabArea = styled.View`
height: 60px;
background-color: ${({theme})=>theme.COLORS.LARANJA};
flex-direction: row;
`;
export const TabItem = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 3px solid ${({theme})=> theme.COLORS.LARANJA};
    margin-top: -20px;
`;
export const AvatarIcon = styled.Image`
    width: 26px;
    height: 26px;
    border-radius: 13px;
`;