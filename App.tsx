import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { OneSignal, LogLevel } from 'react-native-onesignal';
import Constants from "expo-constants";
// Importe o UserProvider

export default function App() {
  
  return (
  
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
          
        />
        <Routes />
      </ThemeProvider>
  );
}
