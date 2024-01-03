import React, { useContext} from "react";
import { AvatarIcon, TabArea, TabItem, TabItemCenter } from "./styles";
import { UserContext } from "../../Context/UserContext"; 

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
type Props = {
    state:any,
    navigation:any
}
export default function CustomTabBar({state, navigation}:Props){
    const userContext = useContext(UserContext);

    const goTo = (screenName:any) => {
        navigation.navigate(screenName)
    }
    if (!userContext) {
        return null; // Ou algum tratamento para quando o contexto não estiver definido
    }
    const { state: user } = userContext;
    return(
        <TabArea>
            <TabItem onPress={()=> goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.7}} width="26" height="26" fill="#fff" />
            </TabItem>
            <TabItem onPress={()=> goTo('Search')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.7}} width="26" height="26" fill="#fff" />
            </TabItem>
            <TabItemCenter onPress={()=> goTo('Appointments')}>
                <TodayIcon  width="32" height="32" fill="#E95401" />
            </TabItemCenter>
            <TabItem onPress={()=> goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===3? 1 : 0.7}} width="26" height="26" fill="#fff" />
            </TabItem>
            <TabItem onPress={()=> goTo('Profile')}>
                {user.avatar != '' ? 
                <AvatarIcon source={{uri: user.avatar}}/>  :
                <AccountIcon style={{opacity: state.index===4? 1 : 0.7}} width="26" height="2" fill="#fff" />
            }
                 </TabItem>
        </TabArea>
    )
}