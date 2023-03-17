import '../assets/css/Contact.css';
import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import "../../node_modules/wowjs/css/libs/animate.css";
function Contact(){
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
      }, []);
    return(
        <div id='contact' className="contact">
            <div className='about-headline wow fadeInDown' data-wow-duration="1s" >
                <div>
                    <span>04.</span>
                    <h2>Contact</h2>
                </div>
                <span></span>
            </div>
            <div className='contact-container wow fadeInDown' data-wow-duration="2s">
                <p>Although I'm currently pretty busy with school, but my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className='contact-links'>
                    <a href='https://www.instagram.com/soufiiyane/'> <span className='fa-brands fa-instagram'></span> Say Hello</a>
                    <a target='_blank' href='https://www.linkedin.com/in/soufiiyane/'> <span className='fa-brands fa-linkedin-in'></span> Say Hello</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;