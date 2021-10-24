import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import AllOrders from '../AllOrders/AllOrders';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://salty-shore-75037.herokuapp.com/pithaUser?email=${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const deleteItem = (event, id) => {
        console.log(event.currentTarget);
        console.log(id);
        fetch(`https://salty-shore-75037.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const remainItem = orders.filter( item => item._id !== id);
                    setOrders(remainItem);
                }
            })
    }
    return (
        <div>
            <h4>Welcome {loggedInUser.displayName}, Your Orders: </h4>
            <table class="table table-hover shadow m-5">
                <thead>
                    <tr>
                        <th scope="col">Package Name</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Email</th>
                        <th scope="col">No. of Travller</th>
                        <th scope="col">Status</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(pth => <AllOrders deleteItem={deleteItem}  order={pth}></AllOrders>)}
                </tbody>
            </table>          
        </div>
    );
};

export default Orders;