import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import { TabsRoutes } from './tabs.routes';
import Barber from '../screens/Barber'

const Stack = createNativeStackNavigator();

export  function MainRoutes(){
    return(
        <Stack.Navigator initialRouteName='Preload'  screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Preload' component={Preload} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='TabRoutes' component={TabsRoutes} />
            <Stack.Screen name='Barber' component={Barber}/>
        </Stack.Navigator>
    );
}