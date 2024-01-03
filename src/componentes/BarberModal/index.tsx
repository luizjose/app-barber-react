import {  CloseButton, DateInfo, DateItem, DateItemNumber, DateItemWeekDay, DateList, DateNextArea, DatePrevArea, DateTitle, DateTitleArea, FinishButton, FinishButtonText, Modal, ModalArea, ModalBody, ModalItem, ServiceInfo, ServiceName, ServicePrice, UserAvatar, UserInfo, UserName } from "./styles";
import ExpandIcon from '../../assets/expand.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import { useEffect, useState } from "react";
type Props ={
    show:any;
    setShow:any;
    user:any;
    service:any;
}
const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
];
const days = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
];
export default function BarberModal({show, setShow, user, service}: Props){
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedHour, setSelectedHour] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    useEffect(()=>{
        if(user.available){
        let daysInMonth = new Date(selectedYear, selectedMonth+1, 0).getDate();
        let newListDays = [];
        for(let i=1; i<=daysInMonth; i++){

            let d = new Date(selectedYear, selectedMonth, i);
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            month = month < 10 ? '0'+month : month;
            day = day < 10 ? '0'+ day : day;

            let selDate = year +'-'+ month+'-'+day;

            let availability = user.available.filter((e:any)=>e.date ===selDate);
            newListDays.push({
                status: availability.length > 0 ? true : false,
                weekday:days[d.getDay()],
                number: i
            })
        }
        setListDays(newListDays);
        setSelectedDay(1);
        setListHours([]);
        setSelectedHour(0);
    }
    }, [user,selectedMonth, selectedYear]);

    useEffect(()=>{
        let today = new Date();
        setSelectedYear(today.getFullYear());
        setSelectedMonth(today.getMonth());
        setSelectedDay(today.getDate());


    }, []);
    const handleLeftDateClick = ()=>{
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        mountDate.setMonth( mountDate.getMonth( ) -1);
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(mountDate.getDate())
    }
    const handleNextDateClick = ()=>{
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        mountDate.setMonth( mountDate.getMonth( ) +1);
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(mountDate.getDate())
    }
    const handleCloseButton = ()=>{
        setShow(false)
    }
    const handleFinishClick =() => {

    }
    
    return(
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"

        >
            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseButton}>
                        <ExpandIcon width="40" height="40" fill="#fff"/>
                    </CloseButton>
                    <ModalItem>
                        <UserInfo>
                            <UserAvatar source={{uri: user.avatar}} />
                            <UserName>{user.name}</UserName>
                        </UserInfo>
                    </ModalItem>
                    {service != null &&
                    <ModalItem>
                    <ServiceInfo>
                        <ServiceName>{user.services[service].name}</ServiceName>
                        <ServicePrice>R$ {user.services[service].price.toFixed(2)}</ServicePrice>
                    </ServiceInfo>
                </ModalItem>
                    
                    }
                    <ModalItem>
                        <DateInfo>
                            <DatePrevArea onPress={handleLeftDateClick}>
                                <NavPrevIcon width="35" height="35" fill="#000000" />
                            </DatePrevArea>
                            <DateTitleArea>
                                <DateTitle>{months[selectedMonth]} {selectedYear}</DateTitle>
                            </DateTitleArea>
                            <DateNextArea onPress={handleNextDateClick}>
                            <NavNextIcon width="35" height="35" fill="#000000" />
                            </DateNextArea>
                        </DateInfo>
                        <DateList horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        listDays.map((item:any, key:any)=>(
                            <DateItem 
                                key={key}
                                style={{
                                    opacity:item.status ? 1 : 0.5
                                }}
                            
                            >
                                <DateItemWeekDay>{item.weekday}</DateItemWeekDay>
                                <DateItemNumber>{item.number}</DateItemNumber>
                            </DateItem>
                        ))
                    }
                        </DateList>
                    </ModalItem>
                    <FinishButton onPress={handleFinishClick}>
                        <FinishButtonText>Finalizar Agendamento</FinishButtonText>
                    </FinishButton>
                    
                </ModalBody>
            </ModalArea>
        </Modal>
    );
}