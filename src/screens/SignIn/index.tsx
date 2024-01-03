import { Text } from "react-native";
import { Container, 
    InputArea, 
    CustomButton, 
    CustomButtonText, 
    SignMessageButton,
    SignMessageButtonText, 
    SignMessageButtonTextBold 
} from "./styles";
import { useNavigation, CommonActions }  from '@react-navigation/native'
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/lock.svg';
import  SignInput  from "../../componentes/SignInput";
import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Api from '../../service/Api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn(){
    const userContext = useContext(UserContext);
    if (!userContext) {
        return null; // Ou algum tratamento para quando o contexto não estiver definido
    }
    const { dispatch: userDispatch } = userContext;
    

    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButton = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'SignUp' }],
            })
          );
    }
   const handleSignClick = async () => {
    if(emailField != '' && passwordField != '' ){
        let res = await Api.signIn(emailField, passwordField);
        if(res.token){
           await AsyncStorage.setItem('token', res.token);
           userDispatch({
            type:'setAvatar',
            payload: {
                avatar: res.data.avatar
            }
        });
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'TabRoutes' }],
            })
          );

        }else{
            alert('E-mail e/ou Senha errados!')
        }

    }else{
        alert('Preencha todos os campos!')
    }
   }
    return(
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail" 
                    value={emailField}
                    onChangeText={(t:any)=>setEmailField(t)}
                    password={false}
                />
                <SignInput 
                    IconSvg={PasswordIcon} 
                    placeholder="Digite sua senha" 
                    value={passwordField}
                    onChangeText={(t:any)=>setPasswordField(t)} 
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButton}>
            <SignMessageButtonText>Ainda não possui uma conta </SignMessageButtonText>
            <SignMessageButtonTextBold>Cadastra-se </SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}