import React, {useState} from "react";
import images from "../assets/images/bedroom.png"
import pic from "../assets/images/kitchen.png"
import picture from "../assets/images/living.room.png"
import luxury from "../assets/images/luxury.png"
import upload from "../assets/images/upload.png"

function Hero() {
    return (
        <section className="hero">
            <img className="image" src={images} />
            <img className="image" src={pic} />
            <img className="image" src={picture} />
            <img className="image" src={luxury} />
            <img className="image" src={upload} />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive led by one-of-a-kind hosts -all without leaving home</p>
        </section>
    )
}

export default Hero