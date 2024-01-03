import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({theme})=> theme.COLORS.GRAY_600};
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
width: 100%;
    padding: 40px;
`;
export const CustomButton  = styled.TouchableOpacity`
    height: 60px;
    background-color: ${({theme})=> theme.COLORS.LARANJA};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const   CustomButtonText = styled.Text`
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
    color: #fff;
    font-weight: bold;
`;
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    color: ${({theme})=> theme.COLORS.GRAY_100};
`;
export const   SignMessageButtonTextBold = styled.Text`
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    color: ${({theme})=> theme.COLORS.LARANJA};
    font-weight: bold;
    margin-left: 2px;
`;
/*

    SignMessageButton,
    SignMessageButtonText, 
    SignMessageButtonTextBold 
*/