import '../assets/css/About.css';
import profile from '../assets/Me.jpg';
import WOW from 'wowjs';
import React, { useState, useEffect } from 'react';
import "../../node_modules/wowjs/css/libs/animate.css"
function About(){
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
      }, []);
    return(
        <div id='about' className='about wow fadeInDown' data-wow-duration="2s">
            <div className='left-about'>
                <div className='about-headline'>
                    <div>
                        <span>01.</span>
                        <h2>About Me</h2>
                    </div>
                    <span></span>
                </div>
                <p>
                Looking ahead to the present day, my focus has shifted towards anything related to <span>Javascript</span>, as i'm delving into the inner workings of <span>JavaScript</span> seeking a deeper understanding of how it functions under the hood.
                </p>
                <p>
                    Here are a few technologies I've been working with recently: 
                </p>
                <div className='skills'>
                    <div className='front-end'>
                        <div className='about-headline'>
                            <div>
                                <h4>Front-end</h4>
                            </div>
                            <span></span>
                        </div>
                        <ul>
                            <li>javascript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className='back-end'>
                        <div className='about-headline'>
                            <div>
                                <h4>Back-end</h4>
                            </div>
                            <span></span>
                        </div>
                        <ul>
                            <li>PHP</li>
                            <li>Symfony</li>
                            <li>C#</li>
                            <li>.Net Core</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='right-about'>
                <div className='wrapper-about'>
                    <img src={profile} alt='Profile Image' />
                </div>
            </div>
        </div>
    )
}
export default About;