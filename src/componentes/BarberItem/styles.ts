import styled from "styled-components/native";

export const Area = styled.TouchableOpacity`
background-color: ${({theme})=> theme.COLORS.GRAY_100};
margin-bottom: 15px;
border-radius: 20px;
padding: 16px;
border:2px solid ${({theme})=> theme.COLORS.LARANJA};
flex-direction: row;

`;
export const Avatar = styled.Image`
width:88px;
height: 88px;
border-radius: 20px;
`;
export const InfoArea = styled.View`
margin-left: 20px;
justify-content: space-between;
`;
export const UserName = styled.Text`
font-size: 18px;
font-weight: bold;
`;
export const SeeProfileButton = styled.View`
width: 85px;
height: 26px;
border: 1px solid ${({theme})=> theme.COLORS.LARANJA};
border-radius: 10px;
justify-content: center;
align-items: center;
`;
export const SeeProfileButtonText = styled.Text`
font-size: 14px;
color: ${({theme})=> theme.COLORS.LARANJA};
`;
/*
Area,
    Avatar,
    InfoArea,
    UserName,
    SeeProfileButton,
*/