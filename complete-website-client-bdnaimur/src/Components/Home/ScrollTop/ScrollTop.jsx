import React, { useEffect, useState } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';

const ScrollTop = () => {
    const [visibility, setVisibility] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 })

    const handleCLick = () => {
        setPosition({ ...position, position: { top: 0, left: 0 } })
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault()
            console.log(window.scrollY);
            if (window.scrollY > 700) {
                setVisibility(true)
            }
            else {
                setVisibility(false)
            }
        })
    })
    const scrollStyle = {

        position: "relative",
        right: 0,
        bottom: 0.5,
        zIndex: 10,
        padding: "5px"
    }
    const arrowStle = {
        position: "fixed",
        width: "12px",
        height: "12px",
        color: "white",
        padding: "3px",
        background: "red",
        borderRadious: "50%",
        cursor: "pointer",
        fontSize: "30px",
        border: "1px solid red"
    }
    const test = {
        position: "fixed"
    }
    const relative = {

    }
    // "relative w-12 h-12 text-white p-3 bg-red-500 rounded-full mr-3 my-28  drop-shadow-lg ring-red-100  ring-8 cursor-pointer text-4xl"
    return (
        <div className={`${relative}`}>
            <span onClick={() => handleCLick()}
                className=
                {`${visibility ? scrollStyle : ''}`}
            >
                <BsArrow90DegUp className={`${arrowStle}`} />
                Sroll Top
            </span>

            <button onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })} className={{
                position: "fixed"
            }}>click to scroll to the 100th pixel</button>

        </div>
    );
};

export default ScrollTop;