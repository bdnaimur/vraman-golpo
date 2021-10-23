import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBody.css'
const HomeBody = () => {

    return (
        <div className="home-header">
        <div className="homeBody-container">
            <h1 className='body-text-left'>Enjoy Vacation With <span className='body-text-right'>Vraman Bilash</span></h1>
            <p>Travel to the any corner of the world, without going around in circles.</p>
            <br/>
            <button className='btn btn-warning'><Link to="/bookings">Book A Tour</Link></button>

        </div>
        {/* <button onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })} className={{
                position: "sticky"
            }}>click to scroll to the 100th pixel</button> */}
        </div>
    );
};

export default HomeBody;