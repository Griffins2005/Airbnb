import React, {useState} from "react"
import logo from "../assets/airbnb-logo.png"

function Navbar() {
    return (
        <nav>
            <img className="nav-icon" src={logo} />
            <h1>airbnb</h1>
        </nav>
    )
}

export default Navbar