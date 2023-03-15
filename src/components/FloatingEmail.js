import '../assets/css/Email.css';
import WOW from 'wowjs';
import React, { useState, useEffect } from 'react';
import "../../node_modules/wowjs/css/libs/animate.css"

function FloatingEmail(){
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
    }, []);

    return(
        <ul className='wow fadeInDown' data-wow-duration="1s">
            <li><a href="mailto:soufiyane.aitmoulay@gmail.com">soufiyane.aitmoulay@gmail.com</a></li>
            <li><span></span></li>
        </ul>
    );
}
export default FloatingEmail;