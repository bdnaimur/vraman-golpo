import React, { useEffect, useState } from 'react';
import spinner from '../../assets/spinner/spinner.gif';
import ShowOurteamDetails from './ShowOurTeamDetails/ShowOurteamDetails';

const ShowOurTeam = () => {
    const [allTeam, setAllTeam] = useState([] || 1)
    console.log(allTeam);
    useEffect(() => {
        const url = `https://salty-shore-75037.herokuapp.com/ourTeams`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllTeam(data)
            })
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <h3 className="text-secondary">Our Team</h3>
                {!allTeam.length ? <div className="text-center"><img src={spinner} alt="Spinner" srcset="" /></div> :
                
                allTeam.map(team =><ShowOurteamDetails team={team}></ShowOurteamDetails>)}
            </div>
            
        </div>
    );
};

export default ShowOurTeam;