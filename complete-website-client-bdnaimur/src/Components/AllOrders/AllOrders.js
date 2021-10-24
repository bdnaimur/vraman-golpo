import React from 'react';
import { Link } from 'react-router-dom';

const AllOrders = ({order}) => {
    // const order = props.order;
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.cost}</td>
            <td>{order.email}</td>
            <td>
                <td>Adult: {order.adult || 0}</td>
                <td>Child: {order.child || 0}</td>
                <td>Infant: {order.infant || 0}</td>
            </td>
            <td>{order.status}</td>
            <td><img style={{ width: "50px", height: "50px", boxShadow: "5px 5px 15px lightGray", borderRadius: "50%" }} src={order.imageURL} alt="" /></td>
            <button className="w-70"><Link to="/userDashboard" className="btn btn-success">Payment</Link></button>
        </tr>
    );
};

export default AllOrders;