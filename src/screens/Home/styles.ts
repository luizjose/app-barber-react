import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
  
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
  
`;
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;
export const HeaderArea = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
    font-weight: bold;
    color: #fff;
`;
export const SearchButton = styled.TouchableOpacity`
width:26px;
height:26px;

`;
export const LocationArea = styled.View`
 background-color: ${({theme})=>theme.COLORS.GRAY_400};
 height: 60px;
 border-radius: 30px;
 flex-direction: row;
 align-items: center;
 padding-left: 20px;
 padding-right: 20px;
 margin-top: 25px;
`;
export const LocationInput = styled.TextInput`
    flex:1;
    font-size: 16px;
    color:#fff;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LoadingIcon =  styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.LARANJA,
    
    
  }))`
   margin-top: 55px;
   
  `;
export const ListArea = styled.View`
    margin-top: 25px;
    margin-bottom: 35px;
`;