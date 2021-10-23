import React from 'react';
import { Link } from 'react-router-dom';

const BookingDetails = ({ service,allServices }) => {
    const length = allServices.length;
    let col_md = 'col-md-4';
    // let height;
    // if(length%2===0 && length===4){
    //      col_md = "col-md-3";
    //      height="400px" 
    // }
    return (
        <div className={`${col_md}`}>
            <div class="card mb-4 tour-height">
                <img class="card-img-top image-scale" src={service.imageURL} height="250px" alt="Card image cap" />
                <div class="card-body ">
                    <h5 class="card-title">Package Name : {service.name}</h5>
                    <div className="d-flex justify-content-between">
                    <Link to={`/singleBookingDetails/${service._id}`}><button  className="btn btn-warning me-5 mr-5">Show Details</button></Link>
                    <div className="price ms-5 ml-5 pe-3"><strong>$ </strong>{service.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;