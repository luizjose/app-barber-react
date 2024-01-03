import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    justify-content: center;
    align-items: center;
   
`;
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.LARANJA,
    
    
  }))`
   margin-top: 55px;
   
  `;