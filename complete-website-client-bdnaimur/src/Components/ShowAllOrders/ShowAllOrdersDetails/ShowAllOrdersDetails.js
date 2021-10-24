import React from 'react';

const ShowAllOrdersDetails = ({ orders, deleteItem, onSubmit, editItem, modalIsOpen, closeModal, editItems, handleClick, handleChange }) => {

    return (
        <tr id="toHidden">
            <td>{orders.name}</td>
            <td>{orders.email}</td>
            {/* <td>Price: {orders.price}</td> */}
            <td>{orders.status}</td>
            <td>
                <select onChange={handleChange} id="orders">
                    <option disabled selected >Select</option>
                    <option value="pending">Pending</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="done">Done</option>
                </select>
            </td>
            <td><button onClick={(e) => { handleClick(orders._id) }} className="btn btn-info">Status</button></td>
            {/* <td><button onClick={() => editItem(orders._id)} className="btn btn-warning">Edit</button></td>
            <ModalForEdit editItem={editItems} onSubmit={onSubmit} orders={orders} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForEdit> */}
            <td><button onClick={(event) => deleteItem(event, orders._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );


};

export default ShowAllOrdersDetails;