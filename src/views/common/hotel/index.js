import { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListHotels from './components/listAvailableHotelOffers'
import ViewHotel from './components/viewHotel'
import TopNavBar from 'views/Header/TopNavBar';
import Header from './components/header';
import Footer from 'components/Footer/Footer';

function HotelOffers() {
    const [hotelRender, setHotelRender] = useState('all')

    return (
        <>
            <TopNavBar />
            <Header text={hotelRender !== 'all' ? "Hotel Details" : "Search Hotels"} />
            {hotelRender != 'all' ?
                <Collapse in={hotelRender != 'all'}>
                    <ViewHotel data={hotelRender} setHotelRender={setHotelRender} />
                </Collapse> : null}
            <Collapse in={hotelRender === 'all'}>
                <ListHotels setHotelRender={setHotelRender} />
            </Collapse>
            <Footer />
        </>
    );
}
export default HotelOffers;