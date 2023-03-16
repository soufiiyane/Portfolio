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
        <div className='about wow fadeIn' data-wow-duration="3s">
            <div className='left-about'>
                <div className='about-headline'>
                    <div>
                        <span>01.</span>
                        <h2>About Me</h2>
                    </div>
                    <span></span>
                </div>
                <p>
                Hello! my name is Soufiyane Aitmoulay, I'm a junior full-stack web developer, currently finishing my engineering studies in computer science, ex junior developer at TMT, i have worked on several projects before, i'm a geek tech guy and i like challenges as i feel i'm born for them.
                </p>
                <p>
                Fast-forward to today, i'm more into anything related to <span>javascript frameworks</span>, my main focus these days is having a deep gasp in <span>Object-Oriented Analyse</span> & <span>Design Patterns</span> in General 
                </p>
                <p>
                    not to forget that i'm in love with <span>Symfony(PHP Framework)</span>
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