import { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListFlights from './components/listAvailableFlightOffers'
import ViewFlight from './components/viewFlight'
import TopNavBar from 'views/Header/TopNavBar';
import Header from './components/header';
import Footer from 'components/Footer/Footer';

function FlightOffers() {
    const [flightRender, setFlightRender] = useState('all')

    return (
        <>
            <TopNavBar />
            <Header text={flightRender !== 'all' ? "Flight Details" : "Search Flights"} />
            {flightRender != 'all' ?
                <Collapse in={flightRender != 'all'}>
                    <ViewFlight data={flightRender} setFlightRender={setFlightRender} />
                </Collapse> : null}
            <Collapse in={flightRender === 'all'}>
                <ListFlights setFlightRender={setFlightRender} />
            </Collapse>
            <Footer />
        </>
    );
}
export default FlightOffers;
