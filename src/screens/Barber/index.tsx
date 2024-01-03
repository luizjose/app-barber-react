import React, { useState, useEffect } from 'react'
import { Text, View } from "react-native";
import Stars from '../../componentes/Stars';
import BarberModal from '../../componentes/BarberModal';
import {
    Container,
    Scroller,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserNameInfo,
    UserFavButton,
    ServiceArea,
    TestmonialArea,
    BackButton,
    LoadingIcon,
    ServicesTitle,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChooseButton,
    ServiceChooseButtonText,
    TestmonialItem,
    TestmonialInfo,
    TestmonialName,
    TestmonialBody
} from "./styles";
import FavoriteIcon from "../../assets/favorite.svg";
import FavoriteFullIcon from "../../assets/favorite_full.svg";
import BackIcon from "../../assets/back.svg";
import NavPrevIcon from "../../assets/nav_prev.svg";
import NavNextIcon from "../../assets/nav_next.svg";
import { useNavigation, useRoute, ParamListBase, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Swiper from 'react-native-swiper';
import Api from '../../service/Api';
type ParamList = {
    YourScreenName: {
        id: string;
        avatar: string;
        name: string;
        stars: number;
        photos: any;
        services: any;
        testimonials: any;
        // Add other properties if available
        // ...
    };
}

export default function Barber() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<ParamList, 'YourScreenName'>>();
    const { id, avatar, name, stars } = route.params;
    const [userInfo, setUserInfo] = useState({
        id: id,
        avatar: avatar,
        name: name,
        stars: stars,
        photos: undefined || [],
        services: undefined || [],
        testimonials: undefined || []
    });
    const [loading, setLoading] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const [selectedService, setSelectdService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const getBarberInfo = async () => {
            setLoading(true);
            let json = await Api.getBarber(userInfo.id);
            if (json.error == '') {
                setUserInfo(json.data);
                setFavorited(json.data.favorited);

                console.log(json.data.available);
            } else {
                alert(json.error)
            }
            setLoading(false)
        }
        getBarberInfo();

    }, []);
    const handleBackButton = async () => {
        navigation.goBack();
    }
   const handleFavClick = async () => {
    setFavorited(!favorited)
   }
   const handleServiceChoose = async (key:any)=>{
    setSelectdService(key);
    setShowModal(true);
   }
    return (
        <Container>
            <Scroller>
                {userInfo?.photos && userInfo.photos.length > 0 ?
                    <Swiper
                        style={{ height: 240 }}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDotActive />}
                        paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
                        autoplay={true}
                    >
                        {userInfo.photos.map((item: any, key) => (
                            <SwipeItem key={key}>
                                <SwipeImage source={{ uri: item.url }} resizeMode="cover" />
                            </SwipeItem>
                        ))}
                    </Swiper> : <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar style={{ borderWidth: 5, borderColor: '#202024' }} source={{ uri: userInfo.avatar }} />
                        <UserInfo>
                            <UserNameInfo>{userInfo.name}</UserNameInfo>
                            <Stars stars={userInfo.stars} showNumber={true} />
                        </UserInfo>
                        <UserFavButton onPress={handleFavClick}>
                            {favorited ? 
                                <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
                            :
                                <FavoriteIcon width="24" height="24" fill="#FF0000" />
                            }
                            
                        </UserFavButton>

                    </UserInfoArea>
                    {loading &&
                        <LoadingIcon size="large" color="#E95401" />
                    }
                    {userInfo?.services &&
                        <ServiceArea>
                            <ServicesTitle>Lista de Serviços</ServicesTitle>

                            {userInfo.services.map((item: any, key) => (
                                <ServiceItem key={key}>

                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                                    </ServiceInfo>
                                    <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                                        <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                                    </ServiceChooseButton>
                                </ServiceItem>
                            ))}
                        </ServiceArea>
                    }
                    {userInfo?.testimonials && userInfo.testimonials.length > 0 &&
                        <TestmonialArea>
                            <Swiper
                                style={{ height: 110 }}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavPrevIcon width="35" height="35" fill="#E95401" />}
                                nextButton={<NavNextIcon width="35" height="35" fill="#E95401" />}
                            >
                                {userInfo.testimonials.map((item: any, key) => (
                                    <TestmonialItem key={key}>
                                        <TestmonialInfo>


                                            <TestmonialName>{item.name}</TestmonialName>
                                            <Stars stars={item.rate} showNumber={false} />
                                        </TestmonialInfo>
                                        <TestmonialBody>{item.body}</TestmonialBody>
                                    </TestmonialItem>
                                ))}

                            </Swiper>
                        </TestmonialArea>
                    }


                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="45" height="45" fill="#fff" />
            </BackButton>
            <BarberModal 
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                service={selectedService}

            />
        </Container>
    );
}