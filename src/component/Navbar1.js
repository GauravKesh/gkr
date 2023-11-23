import React from 'react';
import logo from "./logo192.png";
import "../style/Navbar1.css";

export default function Navbar1() {
    document.body.style.backgroundColor = "#1d1d1d";
    document.body.style.color = "#fff";

    const scrollToTarget = (targetId) => {
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    };
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.height = "100vh";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        // document.getElementById("myNav").style.height = "50vh";
    }
    return (
        <>
        <div className='overlay' id='mynav'>
            <a href="javascript:void(0)" className='closebtn' onclick='closeNav()'>&times;</a>
            <div className="overlay-content">
                    <button  aria-current="page" onClick={() => scrollToTarget('home')}>Home</button>
                    <button  onClick={() => scrollToTarget('gallery')}>Gallery</button>
                    <button  onClick={() => scrollToTarget('projects')}>Projects</button>
                    <button  onClick={() => scrollToTarget('blog')}>Blogs</button>
                    <button  onClick={() => scrollToTarget('contact')}>Contact</button>
            </div>
        </div>
        <span style={{fontsize:"30px",cursor:"pointer"}} onclick="openNav()">&#9776; open</span>
        </>
    )
}
