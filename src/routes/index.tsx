import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { MainRoutes  } from './main.routes';
import { UserProvider } from '../Context/UserContext'; 
export function Routes() {

  const { COLORS } = useTheme();

  return (
    <View style={{ flex:1, backgroundColor: COLORS.GRAY_600 }}>
      <UserProvider>

      
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
      </UserProvider>
    </View>
  );
}