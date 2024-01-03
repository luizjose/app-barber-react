import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
flex-direction: row;
border-radius: 30px;
padding-left: 15px;
align-items: center;
margin-bottom: 15px;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_400};
   border:1px ${theme.COLORS.LARANJA};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
export const Input = styled.TextInput`
flex:1;
font-size: ${({theme})=>theme.FONT_SIZE.MD}px;
color: ${({theme})=>theme.COLORS.LARANJA};
margin-left: 10px;
`;