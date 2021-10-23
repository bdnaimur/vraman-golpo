import React from 'react';
import { useState, useEffect } from 'react';
import AllData from '../../AllData/AllData';

const Allservices = () => {
    const [services, setServices] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updated, setdUpdated] = useState(false);
    const [editItems, setEditItems] = useState([]);
    useEffect(() => {
        const url = `https://salty-shore-75037.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [updated])
    const deleteItem = (id) => {
        fetch(`https://salty-shore-75037.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const remainItem = services.filter(item => item._id !== id);
                    setServices(remainItem);
                }
            })
    }
    // update price and name
    function openModal() {
        setIsOpen(true);
    }
    const editItem = (id) => {
        console.log(id);
        openModal()
        const clickedItem = services.filter(item => item._id === id);
        console.log(clickedItem[0]);
        setEditItems(clickedItem[0]);
    }

    function closeModal() {
        setIsOpen(false);
        // setdependency(false)
    }
    const onSubmit = (data, e) => {
        console.log(data);
        console.log(editItems);
        const id = editItems._id;
        console.log("clicked", data, id);
        fetch(`http://localhost:5055/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setdUpdated(true)
                }
                console.log(result);
            })
        closeModal();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-2 col-md-8 p-3">
                    <table class="table table-hover shadow p-5">
                        <tbody>
                            {services.map(service => <AllData editItem={editItem} onSubmit={onSubmit} editItems={editItems} modalIsOpen={modalIsOpen} closeModal={closeModal} deleteItem={deleteItem} service={service}></AllData>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Allservices;