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
import PersonIcon from '../../assets/person.svg';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/lock.svg';
import  SignInput  from "../../componentes/SignInput";
import { useContext, useState } from "react";
import Api from '../../service/Api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../Context/UserContext";

export default function SignUp(){
    const userContext = useContext(UserContext);
    
    const navigation = useNavigation()
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    if (!userContext) {
        return null; // Ou algum tratamento para quando o contexto não estiver definido
    }
    const { dispatch: userDispatch } = userContext;
    

    const handleMessageButton = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'SignIn' }],
            })
          );
    }
   const handleSignClick = async () => {
    if(nameField != '' && emailField != '' && passwordField != '' ){
        let res = await Api.signUp(nameField, emailField, passwordField);
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
            alert('Erro:' + res.error)
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
                    IconSvg={PersonIcon} 
                    placeholder="Digite seu nome" 
                    value={nameField}
                    onChangeText={(t:any)=>setNameField(t)}
                    password={false}
                />
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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButton}>
            <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
            <SignMessageButtonTextBold>Faça o Login </SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}