import React, { useEffect, useState } from 'react';
import spinner from '../../assets/spinner/spinner.gif';
import BookingDetails from '../Home/BookingDetails/BookingDetails';

const Packages = () => {
    const [services, setServices] = useState([])

    console.log('services',services);
    useEffect(()=>{
    const url = `http://localhost:5055/services`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setServices(data))

},[])

    return (
        <div className="container mt-5">
            <div className="row">
                <h3 className="text-center mb-3 text-secondary">Tour Packages</h3>
               {!services.length ? <div className="text-center"><img src={spinner} alt="Spinner" srcset="" /></div> :
               
               services.map(service =><BookingDetails allServices = {services} service = {service}></BookingDetails>)}
            </div>
         </div>
    );
};



export default Packages;