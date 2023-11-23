import React from 'react'
import "../style/Contact.css";
import { Label } from 'flowbite-react';

export default function Contact() {
    return (
        <div className='container z-3'>
            <p className='text-center' style={{ fontSize: "50px", fontFamily:"-moz-initial" }}>Let's Connect Together!</p>
            <div className="content">
                <div className="box1">

                <div className="s1">
                <h1>Get In Touch</h1>
                <form>
                <div className="name">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required placeholder=' Name'/>
                </div>
                <div className="email">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required placeholder='Enter your email'/>
                </div>
                <div className="message">
                <label for="message">Message</label>
                <textarea name="message" id="message" required placeholder='Enter your message'></textarea></div>
                <div className="button">
                <input type="submit" value="Send Message" /></div>

                
                </form>               
                 </div>
                 <span></span>
                <div className="s2"></div>
                </div>
                
                <div className="box2">
                
                
                </div>

            </div>


        </div>
    )
}
