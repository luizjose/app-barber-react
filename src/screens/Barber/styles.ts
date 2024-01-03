import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
`;
    export const Scroller = styled.ScrollView`
    flex:1;

    `;
    export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 5px;
    margin: 3px;
    `;
    export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
    border-radius: 5px;
    margin: 3px;`;
    export const SwipeItem = styled.View`
    flex:1;
    background-color: ${({theme})=> theme.COLORS.LARANJA};
    `;
    export const SwipeImage = styled.Image`
    width:100%;
    height: 240px;
    
    `;   
    export const FakeSwiper = styled.View`
    height: 140px;
    background-color:  ${({theme})=> theme.COLORS.LARANJA};
    `;
    export const PageBody = styled.View`
        background-color: ${({theme})=> theme.COLORS.GRAY_600};
        border-top-left-radius: 50px;
        margin-top: -50px;
        min-height: 400px;
    `;
    export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
    `;
    export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;

    margin-left: 30px;
    margin-right: 20px;
    

    `;
    export const UserInfo = styled.View`
    flex:1;
    justify-content: flex-end;
    margin-bottom: 5px;
    `;
    export const UserNameInfo = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    `;
    export const UserFavButton= styled.TouchableOpacity`
        width: 40px;
        height: 40px;
        background-color: ${({theme})=> theme.COLORS.GRAY_600};
        border: 2px solid #fff;
        border-radius: 20px;
        margin-right: 20px;
        margin-left: 20px;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
    `;
    export const ServiceArea = styled.View`
    margin-top: 30px;
    `;
    export const TestmonialArea = styled.View`
     margin-top: 30px;
     margin-bottom: 50px;
     `;            
    
    export const ServicesTitle =styled.Text`
    color: ${({theme})=> theme.COLORS.LARANJA};
    font-size: 18px;
    font-weight: bold;
    margin-left:30px;
    margin-bottom: 20px;
    `;
    export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    `;
    export const ServiceInfo =styled.View`
    flex: 1;
    `;

    export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme})=> theme.COLORS.LARANJA};
    `;

    export const ServicePrice = styled.Text`
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.LARANJA};`;
    export const ServiceChooseButton= styled.TouchableOpacity`
        background-color:${({theme})=> theme.COLORS.LARANJA} ;
        border-radius: 10px;
        padding: 10px 15px;
        justify-content: center;
        align-items: center;
    `;
    export const ServiceChooseButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    `;
    export const TestmonialItem = styled.View`
       background-color: ${({theme})=> theme.COLORS.LARANJA};
       padding: 15px;
       border-radius: 10px;
       height: 110px;
       justify-content: center;
       margin-left: 50px;
       margin-right: 50px;
    `;
    export const TestmonialInfo= styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;

    `;
    export const TestmonialName= styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    `;
    export const TestmonialBody= styled.Text`
    font-size:13px;
    color: #fff;
    `;
    export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 40px;
    z-index: 9;
`;
export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
`;