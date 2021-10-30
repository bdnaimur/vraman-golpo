import React, { useEffect, useState } from 'react';
import spinner from '../../../assets/spinner/spinner.gif';
import BookingDetails from '../BookingDetails/BookingDetails';


const Bookings = () => {
    const [services, setServices] = useState([])

    console.log('services', services);
    useEffect(() => {
        const url = `https://salty-shore-75037.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 3)))
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                    <h3 className="text-center mb-3 text-secondary">Tour Packages</h3>
                    {services.map(service => <BookingDetails allServices={services} service={service}></BookingDetails>)}
            </div>
        </div>
    );
};

export default Bookings;