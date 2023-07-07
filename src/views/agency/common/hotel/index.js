import { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListHotels from './components/listAvailableHotelOffers'
import ViewHotel from './components/viewHotel'

function HotelOffers() {
    const [hotelRender, setHotelRender] = useState('all')

    return (
        <>
            {hotelRender != 'all' ?
                <Collapse in={hotelRender != 'all'}>
                    <ViewHotel data={hotelRender} setHotelRender={setHotelRender} />
                </Collapse> : null}
            <Collapse in={hotelRender === 'all'}>
                <ListHotels setHotelRender={setHotelRender} />
            </Collapse>
        </>
    );
}
export default HotelOffers;