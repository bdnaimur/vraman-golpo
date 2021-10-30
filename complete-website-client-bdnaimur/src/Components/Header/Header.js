import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../assets/logo/varaman galpo logo.png';
import './Header.css';
import Topbar from './Topbar';
import { Fade } from 'react-reveal/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { customAuthAction } from '../../redux/action/action';

const Header = () => {
    const email = useSelector(state=>state.auth?.authdetails?.email || '');
    const dispatch = useDispatch();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState({
    })
    const handleClick = () => {
        setLoggedInUser('');
        dispatch(customAuthAction({}));

    }
    // const cpName = {
    //     fontWeight : "700",
    //     color: "darkGreen",
    //     marginTop: "20px",
    //     textShadow: "2px 2px 5px lightGray"
    // }
    console.log(loggedInUser);
    return (
        <>
        <Topbar/>
        <section style={{"marginTop":"-14px","marginBottom":"-14px"}} class="background-color">
            <nav class="navbar navbar-expand-lg navbar-light sticky-sm-top ml-end">
                <div class="container">
                    <Link class="navbar-brand" to="/home"> 
                    {/* <h1 style={cpName} className="cp-name">Vraman Bilash</h1> */}
                        <img class="logo border" src={logo} alt="logo" height="50px" />
                    </Link>
                    <button class="navbar-toggler mt-4 border" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav fw-bold">
                            <li class="nav-item">
                                {/* <a class="nav-link" aria-current="page" href="/home">Home</a> */}
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            {/* {loggedInUser.superAdmin && */}
                                <li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/allservices">Admin</Link>
                            </li>
                            {/* }  */}
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/deals">Deals</a> */}
                                <Link class="nav-link " to="/packages">Packages</Link>
                            </li>
                            {email && <li class="nav-item nav-link " onClick={handleClick} >Sign Out</li>}
                            
                            {loggedInUser.emailVerified && <li className="nav-item"><Link className="nav-link " to={`/userDashboard/${loggedInUser.email}`}>Dashboard</Link></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        </>
    );
};

export default Header;