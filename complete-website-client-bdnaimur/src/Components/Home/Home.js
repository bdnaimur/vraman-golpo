import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ReviewHomePage from '../ReviewHomePage/ReviewHomePage';
import ShowOurTeam from '../ShowOurTeam/ShowOurTeam';
import WhoWeAre from '../WhoWEAre/WhoWeAre';
import Bookings from './Bookings/Bookings';
import './Home.css';
import HomeBody from './HomeBody/HomeBody';
import ScrollTop from './ScrollTop/ScrollTop';
const Home = () => {
    const [pitha, setPitha] = useState([]);
    
    useEffect(()=>{
        const url = `https://salty-shore-75037.herokuapp.com/vramankaris`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPitha(data))
    },[])
    return (
        <div >
            <HomeBody ></HomeBody>
            <Bookings/>
            <ReviewHomePage/>
            <ShowOurTeam/>
            <WhoWeAre/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;