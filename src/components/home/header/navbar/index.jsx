import React from 'react'
import './style.css'
// import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
    return (
        <header className="header container">
            <main className="navbar">
                <div className="logo">
                    <p className="txt_logo">FLOE<span className="txt_second">M</span>WALLET</p>
                </div>
                <nav className='links'>
                    <a href="/" className="home">Home</a>
                    <a href="/" className="home">Features</a>
                    <a href="/" className="home">About us</a>
                    <button className="hm_btn"><a href="/" className="home">Sign In</a></button>                    
                </nav>
            </main>
        </header>
        
    )
}

export default Navbar
