import React from 'react'
import "../style/Navbar.css"
// import PropTypes from 'prop-types'
import logo from './logo192.png';

export default function Navbar(props) {
    document.body.style.backgroundColor = "#1d1d1d";
    document.body.style.color = "#fff";

    const scrollToTarget = (targetId) => {
        // Belirli bir hedefe animasyonlu bir şekilde scroll yapma
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      };

    return (
        <div className='contaianer '>
            <nav className="navbar navbar-expand-lg navbar-expand  fixed-top  bg-body-tertiary overlay" id='' data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-brand mx-2  logo"><img src={logo} style={{ width: "30px", height: "30px" }} alt="LOGO" /></button>
                    <div className="collapse navbar-collapse  nav-center   " id="navbarSupportedContent">
                        <ul className="navbar-nav" data-bs-theme="dark ">
                            <li className="nav-item mx-2">
                                <button className="nav-link text" aria-current="page" onClick={() => scrollToTarget('home')}>Home</button>
                            </li>
                            <li className="nav-item mx-2 ">
                                <button className="nav-link text" onClick={() => scrollToTarget('gallery')}>Gallery</button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className="nav-link text " onClick={() => scrollToTarget('projects')}>Projects</button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className="nav-link text" onClick={() => scrollToTarget('blog')}>Blogs</button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className="nav-link text" onClick={() => scrollToTarget('contact')}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
