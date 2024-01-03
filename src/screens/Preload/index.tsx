import React, { useContext, useEffect} from 'react';
import { Container,  LoadIndicator } from "./styles";
import BarberLogo from '../../assets/barber.svg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Api from '../../service/Api';
import { UserContext } from '../../Context/UserContext';


export default function Preload(){
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const userContext = useContext(UserContext);
    if (!userContext) {
        return null; // Ou algum tratamento para quando o contexto não estiver definido
    }
    const { dispatch: userDispatch } = userContext;
    

    useEffect(()=>{
        const checkToken = async ()=>{
            const token = await AsyncStorage.getItem('token');
            if(token){
                let res = await Api.checkToken(token);
                if(res.token){
                    await AsyncStorage.setItem('token', res.token);
           userDispatch({
            type:'setAvatar',
            payload: {
                avatar: res.data.avatar
            }
        });
        navigation.reset({
            
              routes: [{ name: 'TabRoutes' }],
            })
          

                }else{
                    navigation.navigate('SignIn')
                }
//sdsd
            }else{

            navigation.navigate('SignIn')
            }
        };
        checkToken();
    },[])
    return(
        <Container>
    
        <BarberLogo width="100%"  height="160"/>
            <LoadIndicator size="large" color="#E95401"/>
        </Container>

    );
}