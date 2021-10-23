import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import spinner from '../../../assets/spinner/spinner.gif';

const SingleBookingDetails = () => {
    const { bookingId } = useParams()
    const [service, setService] = useState('')

    useEffect(() => {
        const url = `http://localhost:5055/services/${bookingId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    console.log(service);
    return (
        <>
            {
                !service ? <div className="text-center"><img src={spinner} alt="Spinner" srcset="" /></div>
                    :
                    <div className="container mt-3">
                        <div className="row">
                            <div className="offset-md-2 col-md-8">
                                <div class="card mb-4 tour-height">
                                    <img class="card-img-top image-scale" src={service.imageURL}  alt="image cap" />
                                    <div class="card-body ">
                                        <h5 class="card-title">Package Name : {service.name}</h5>
                                        <h5>Details</h5>
                                        <p>
                                            {service.details}
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <Link to={`/CheckOut/${service._id}`}><button className="btn btn-warning me-5 mr-5">Order</button></Link>
                                            <div className="price ms-5 ml-5 pe-3"><strong>$ </strong>{service.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default SingleBookingDetails;