import '../assets/css/Hero.css';
import WOW from 'wowjs';
import React, { useState, useEffect } from 'react';
import "../../node_modules/wowjs/css/libs/animate.css"
function Hero() {

    useEffect(() => {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
      }, []);

    return (
        <div className='hero wow fadeInDown' data-wow-duration="2s">
            <span>Hi, my name is</span>
            <h1>Soufiyane AitMoulay</h1>
            <h2>I build things for the web.</h2>
            <p>I'm a junior full-stack web developer, mainly interested in <span>Symfony</span> and <span>React.js</span> beside that i'm currently finishing my engineering studies in computer science.</p>
           <a href='mailto:soufiyane.aitmoulay@gmail.com'>Offer for me ?</a>
        </div>
    );
}

export default Hero;