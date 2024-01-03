import { View } from "react-native";
import { useNavigation,CommonActions } from '@react-navigation/native';
import { 
    Area,
    Avatar,
    InfoArea,
    UserName,
    SeeProfileButton,
    SeeProfileButtonText
 } from './styles';
import Stars from "../Stars";
interface Props {
    avatar: string;
    name: string;
    stars: any;
    id: any;
}


export default function BarberItem({data}:{data:Props}){
    const navigation = useNavigation();
    
    const handleClick = async () => {
        const page = 'Barber';
         navigation.dispatch(
            CommonActions.navigate(page,{
                id: data.id,
                stars: data.stars,
                avatar: data.avatar,
                name: data.name
              })
         
         );
    }
    return(
        <Area onPress={handleClick}>
            <Avatar source={{uri: data.avatar}}/>
            <InfoArea>
                <UserName>{data.name}</UserName>
                <Stars stars={data.stars} showNumber={true} />
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}