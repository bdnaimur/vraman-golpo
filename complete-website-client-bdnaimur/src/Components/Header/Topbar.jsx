import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io';
const Topbar = () => {
    return (
        <header className="bg-secondary">
            <div className="container d-flex justify-content-between align-items-center" >
                <p className="mt-3"><small>7 Temasek Boulevard, #12-07 Noval Tower 1 Bangladesh 038987</small></p>
                <nav className="">
                    <a href="#" target="_blank" className="m-3 text-white"><FaFacebookSquare className="text-1xl" /></a>
                    <a href="#" target="_blank" className="m-3 text-white"><FiTwitter className="text-1xl" /></a>
                    <a href="#" target="_blank" className="m-3 text-white"><FiMail className="text-1xl" /></a>
                    <a href="#" target="_blank" className="m-3 text-white"><IoLogoLinkedin className="text-1xl" /></a>
                </nav>
            </div>
        </header>
    );
};

export default Topbar;