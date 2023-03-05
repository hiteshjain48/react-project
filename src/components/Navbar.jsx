import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link to={'/Home'}>
                <h1>Home</h1>
            </Link>
            <Link to={'/Weather'}>
                <h1>Weather</h1>
            </Link>
            <Link to={'/Form'}>
                <h1>Form</h1>
            </Link>
            <Link to={'/Clock'}>
                <h1>Clock</h1>
            </Link>
            <Link to={'/Calculator'}>
                <h1>Calculator</h1>
            </Link>
            <Link to={'/Music'}>
                <h1>Music</h1>
            </Link>
        </div>
    )
}

export default Navbar;