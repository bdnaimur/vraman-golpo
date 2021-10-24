import React, { useEffect, useState } from 'react';
import BookingDetails from '../Home/BookingDetails/BookingDetails';
import Spinner from '../Spinner/Spinner';

const Packages = () => {
    const [services, setServices] = useState([])

    console.log('services',services);
    useEffect(()=>{
    const url = `https://salty-shore-75037.herokuapp.com/services`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setServices(data))

},[])

    return (
        <div className="container mt-5">
            <div className="row">
                <h3 className="text-center mb-3 text-secondary">Tour Packages</h3>
               {!services.length ?  <Spinner/>:
               
               services.map(service =><BookingDetails allServices = {services} service = {service}></BookingDetails>)}
            </div>
         </div>
    );
};



export default Packages;