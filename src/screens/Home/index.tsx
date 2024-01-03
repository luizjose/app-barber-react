import { Alert, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { request, PERMISSIONS } from 'react-native-permissions';
import * as Location from 'expo-location';
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea
} from './styles';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Api from '../../service/Api';
import BarberItem from '../../componentes/BarberItem';

interface CustomCoords {
    latitude: number ;
    longitude: number;
    // Outros campos, se houver, devem ser tipados aqui
}

export default function Home() {
    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [loading, setLoading] = useState(false);
    const [coords, setCoords] = useState<CustomCoords | null>(null);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false)

    const handleLocationFinder = async () => {
        setCoords(null);
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);
            let location = await Location.getCurrentPositionAsync({});
            setCoords(location.coords);
            getBarbers();
        } else {

        }

    }
    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if (coords) {
            lat = coords.latitude;
            lng = coords.longitude;
        }else{
            console.log('fsf')
        }

        let res = await Api.getBarbers(lat, lng, locationText);
        if (res.error == '') {
            setList(res.data);
           // console.log(res)
            if (res.loc) {
                setLocationText(res.loc)
            }
            
        } else {
            Alert.alert('Erro:' + res.error)
        }
        setLoading(false)
    }
    useEffect(() => {
        getBarbers();
    }, []);
   const onRefresh = async()=>{
    setRefreshing(false)
    getBarbers();
    }
    const handleLocationSearch = async ()=>{
         setCoords(null)
         getBarbers();
    }
    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro Favorito</HeaderTitle>
                    <SearchButton onPress={() =>
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Search' }],
                            }))
                    }>
                        <SearchIcon width="26" height="26" fill="#fff" />
                    </SearchButton>
                </HeaderArea>
                <LocationArea>
                    <LocationInput
                        placeholder='Onde você está?'
                        placeholderTextColor="#fff"
                        value={locationText}
                        onChangeText={(t: any) => setLocationText(t)}
                        onEndEditing={handleLocationSearch} 
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="26" height="26" fill="#fff" />
                    </LocationFinder>
                </LocationArea>
                {loading && <LoadingIcon size={'large'} />}
                    <ListArea>
                        {list.map((item, key)=>(
                            <BarberItem key={key} data={item} />
                        ))}
                    </ListArea>
            </Scroller>
        </Container>
    )
}