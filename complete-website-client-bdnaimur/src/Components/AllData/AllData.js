import React, { useEffect, useState } from 'react';
import ModalForEdit from '../ModalForEdit/ModalForEdit';

const AllData = ({ service, deleteItem, onSubmit, editItem, modalIsOpen, closeModal, editItems }) => {

    const [display, setDisplay] = useState({
        yes: true
    });

    return (
        <tr>
            <td>Name: {service.name}</td>
            {/* <td>{service.email}</td> */}
            <td>Price: {service.price}</td>
            {/* <td>Details: {service.details}</td> */}
            {service.day && <td>Day: {service.day}</td>}
            {service.night && <td>Night: {service.night}</td>}
            <td><img style={{ width: "50px", height: "50px" }} src={service.imageURL} alt="" /></td>
            <td><button onClick={() => editItem(service._id)} className="btn btn-warning">Edit</button></td>
        <ModalForEdit editItem={editItems} onSubmit={onSubmit} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForEdit>
            <td><button onClick={() => deleteItem(service._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default AllData;