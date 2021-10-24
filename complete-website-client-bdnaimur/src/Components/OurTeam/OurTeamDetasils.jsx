import React from 'react';

const OurTeamDetasils = ({team,deleteItem,count}) => {

    return (
        <tr>
            <td>{count}</td>
            <td>{team.name}</td>
            <td>{team.price}</td>
            <td><img src={team.imageURL} alt="Team Images" height="40px" srcset="" /></td>

            {/* {service.day && <td>{service.day}</td>}
            {service.night && <td>{service.night}</td>}
            <td><img style={{ width: "50px", height: "50px" }} src={service.imageURL} alt="" /></td>
            <td>
                <button onClick={() => editItem(service._id)} className="btn btn-warning">Edit</button>
                <ModalForEdit editItem={editItems} onSubmit={onSubmit} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForEdit>
            </td> */}
            <td><button onClick={() => deleteItem(team._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default OurTeamDetasils;