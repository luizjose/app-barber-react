import { View,Text, TextInput, Button } from 'react-native';
import { Container } from './styles';
import Api from '../../service/Api';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Profile(){
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const handleLogoutClick = async () =>{
      await  Api.logout();
      navigation.reset({
        routes:[{name: 'SignIn'}]
      })
    }
    return(
        
        <Container>
            <Text>Profile</Text>
            <Button title='Sair' onPress={handleLogoutClick} />
        </Container>
           
           
        
    )
}