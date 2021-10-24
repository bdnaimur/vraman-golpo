import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import '../Admin/Admin.css';
import Spinner from '../Spinner/Spinner';
import OurTeamDetasils from './OurTeamDetasils';

const OurTeam = () => {
    const [render, setRender] = useState(false);
    const [teams, setTeams] = useState([]);
    // const [clicked, setClicked] = useState({
    //     manage: false,
    //     add: false,
    //     edit: false
    // });

    useEffect(() => {
        const url = `https://salty-shore-75037.herokuapp.com/ourTeams`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRender(true);
                setTeams(data)
            })
    }, [render])

    const deleteItem = (id) => {
        fetch(`http://localhost:5055/deleteTeamMember/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const remainItem = teams.filter(item => item._id !== id);
                    setTeams(remainItem);
                }
            })
    }
    let count = 1
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Admin />
                </div>
                <div className="col-md-9 p-3">
                    <table class="table table-hover shadow p-5">
                    <thead>
                            <tr className="bg-secondary text-white">
                                <th>Serial No.</th>
                                <th>Name</th>
                                <th>Desination</th>
                                <th>Image</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!teams.length ? <Spinner /> :

                                teams.map(team => <OurTeamDetasils count={count++} team={team} deleteItem={deleteItem} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default OurTeam;