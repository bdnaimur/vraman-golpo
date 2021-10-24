import React, { useEffect, useState } from 'react';
import ModalForEdit from '../ModalForEdit/ModalForEdit';

const AllData = ({ service, deleteItem, onSubmit, editItem, modalIsOpen, closeModal, editItems }) => {

    const [display, setDisplay] = useState({
        yes: true
    });

    return (
        <tr>
            <td>{service.name}</td>
            <td>{service.price}</td>
            {service.day && <td>{service.day}</td>}
            {service.night && <td>{service.night}</td>}
            <td><img style={{ width: "50px", height: "50px" }} src={service.imageURL} alt="" /></td>
            <td>
                <button onClick={() => editItem(service._id)} className="btn btn-warning">Edit</button>
                <ModalForEdit editItem={editItems} onSubmit={onSubmit} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForEdit>
            </td>
            <td><button onClick={() => deleteItem(service._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default AllData;